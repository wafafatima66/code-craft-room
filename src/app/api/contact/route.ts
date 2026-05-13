import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  package?: string;
  message?: string;
  timeline?: string;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;
const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

function getGoogleAppsScriptUrl(value?: string) {
  const trimmed = value?.trim();

  if (!trimmed) return null;

  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  return `https://script.google.com/macros/s/${trimmed}/exec`;
}

function sanitizePhone(value?: string) {
  return (value || '')
    .replace(/[^\d+\-()\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 20);
}

async function parseContactPayload(req: Request): Promise<ContactPayload> {
  const contentType = req.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return (await req.json()) as ContactPayload;
  }

  const formData = await req.formData();

  return {
    name: String(formData.get('name') || ''),
    email: String(formData.get('email') || ''),
    phone: String(formData.get('phone') || ''),
    company: String(formData.get('company') || ''),
    package: String(formData.get('package') || ''),
    message: String(formData.get('message') || ''),
    timeline: String(formData.get('timeline') || ''),
  };
}

export async function POST(req: Request) {
  try {
    const payload = await parseContactPayload(req);
    const {
      name = '',
      email = '',
      phone = '',
      company = '',
      package: selectedPackage = '',
      message = '',
      timeline = '',
    } = payload;
    const sanitizedPhone = sanitizePhone(phone);

    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: 'Email and message are required.' },
        { status: 400 }
      );
    }

    const appsScriptUrl = getGoogleAppsScriptUrl(GOOGLE_APPS_SCRIPT_URL);
    let emailSent = false;
    let sheetSaved = false;
    const errors: string[] = [];

    if (appsScriptUrl) {
      try {
        const sheetsResponse = await fetch(appsScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify({
            name,
            email,
            phone: sanitizedPhone,
            company,
            package: selectedPackage,
            message,
            timeline,
            source: 'codecraftspace-contact-form',
          }),
          cache: 'no-store',
        });

        const sheetsText = await sheetsResponse.text();

        if (!sheetsResponse.ok) {
          throw new Error('Failed to save lead to Google Sheets.');
        }

        let sheetsResult: { success?: boolean; error?: string } | null = null;

        try {
          sheetsResult = JSON.parse(sheetsText) as { success?: boolean; error?: string };
        } catch {
          sheetsResult = null;
        }

        if (sheetsResult && sheetsResult.success === false) {
          throw new Error(sheetsResult.error || 'Failed to save lead to Google Sheets.');
        }

        sheetSaved = true;
      } catch (error) {
        console.error('Google Sheets save failed:', error);
        errors.push(
          error instanceof Error ? `Google Sheets: ${error.message}` : 'Google Sheets: save failed.'
        );
      }
    } else {
      errors.push('Google Sheets: not configured.');
    }

    if (resend) {
      try {
        await resend.emails.send({
          from: 'Code Craft Space <onboarding@resend.dev>',
          to: 'fatima.amir.dev@gmail.com',
          subject: `New client from code craft space about ${selectedPackage || company || 'inquiry'}`,
          text: `
Name: ${name}
Email: ${email}
Phone: ${sanitizedPhone || 'N/A'}
Company: ${company || 'N/A'}
Package: ${selectedPackage || 'N/A'}
Timeline: ${timeline || 'N/A'}

Message:
${message}
          `,
        });
        emailSent = true;
      } catch (error) {
        console.error('Resend email failed:', error);
        errors.push(
          error instanceof Error ? `Email: ${error.message}` : 'Email: send failed.'
        );
      }
    } else {
      errors.push('Email: not configured.');
    }

    try {
      const audienceId = process.env.RESEND_AUDIENCE_ID;
      if (resend && audienceId && email) {
        const [firstName, ...rest] = (name || '').trim().split(/\s+/);
        const lastName = rest.length ? rest.join(' ') : undefined;
        await resend.contacts.create({
          email,
          firstName: firstName || undefined,
          lastName,
          unsubscribed: false,
          audienceId,
        });
      }
    } catch (contactErr) {
      console.warn('Resend contact save failed:', contactErr);
    }

    if (emailSent && sheetSaved) {
      return NextResponse.json({
        success: true,
        partial: false,
        emailSent,
        sheetSaved,
        message: 'Email sent and lead saved to Google Sheets.',
      });
    }

    if (emailSent || sheetSaved) {
      return NextResponse.json({
        success: true,
        partial: true,
        emailSent,
        sheetSaved,
        errors,
        message: emailSent
          ? 'Email was sent, but Google Sheets save failed.'
          : 'Lead was saved to Google Sheets, but the email alert failed.',
      });
    }

    return NextResponse.json(
      {
        success: false,
        partial: false,
        emailSent,
        sheetSaved,
        errors,
        message: 'Both email sending and Google Sheets saving failed.',
      },
      { status: 502 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: 'Unexpected server error while sending your message.' },
      { status: 500 }
    );
  }
}
