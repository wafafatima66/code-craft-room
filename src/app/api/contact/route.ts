import { NextResponse } from 'next/server';
// import Resend from 'resend';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, projectType, message, timeline } = await req.json();

    // Send email to your domain
    await resend.emails.send({
      from : "Code Craft Space <onboarding@resend.dev>",
      to: 'fatima.amir.dev@gmail.com',   // where you want to receive the messages
      subject: `New client from code craft space about ${projectType || ''} `,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Company: ${company || 'N/A'}
Project Type: ${projectType || 'N/A'}
Timeline: ${timeline || 'N/A'}

Message:
${message}
      `,
    });

    // Save contact to Resend audience (contacts)
    try {
      const audienceId = process.env.RESEND_AUDIENCE_ID;
      if (audienceId && email) {
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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
