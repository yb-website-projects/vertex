import { NextResponse } from 'next/server';

import sgMail from '@sendgrid/mail';

type FundRequestData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  country: string;
  investorStatus: string;
  purpose: string;
  message?: string;
  consent: boolean;
};

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const bodyJSON = (await request.json()) as FundRequestData;
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      website,
      country,
      investorStatus,
      purpose,
      message,
    } = bodyJSON;

    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    // Create email content
    const msg = {
      to: process.env.ADMIN_EMAIL!, // Your admin email address
      from: process.env.FROM_EMAIL!, // Verified sender email
      subject: 'New Fund Access Request',
      html: `
        <h2>New Fund Access Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Investor Status:</strong> ${investorStatus}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        ${message ? `<p><strong>Additional Message:</strong> ${message}</p>` : ''}
      `,
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json({ message: 'Fund access request sent successfully.' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending fund access request:', errorMessage);
    return NextResponse.json(
      { message: 'Failed to send fund access request.', error: errorMessage },
      { status: 500 }
    );
  }
}
