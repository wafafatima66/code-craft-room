import { NextResponse } from 'next/server';
// import Resend from 'resend';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

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

    // Insert contact into Supabase emails table
    try {
      if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
        const { error: dbError } = await supabase.from('emails').insert({
          email,
          name,
          phone,
          company,
          project_type: projectType || null,
          timeline: timeline || null,
          message,
          source: 'contact_form',
        });
        if (dbError) {
          console.warn('Supabase insert failed:', dbError.message);
        }
      } else {
        console.warn('Supabase env vars missing; skipping contact persistence');
      }
    } catch (dbErr) {
      console.warn('Supabase insert exception:', dbErr);
    }

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
