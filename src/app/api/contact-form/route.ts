import { NextResponse } from 'next/server';

import sgMail from '@sendgrid/mail';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message?: string;
  consent: boolean;
};

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const bodyJSON = (await request.json()) as ContactFormData;
    const { firstName, lastName, email, message } = bodyJSON;

    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    // Create email content
    const msg = {
      to: [process.env.ADMIN_EMAIL!, process.env.ADDITIONAL_ADMIN_EMAIL!], // Admin email addresses
      from: process.env.FROM_EMAIL!, // Verified sender email
      subject: 'New Contact form Request',
      html: `
        <h2>New Fund Access Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${message ? `<p><strong>Additional Message:</strong> ${message}</p>` : ''}
      `,
    };

    // Send email
    await sgMail.send(msg);

    const clientMSG = {
      to: email, // Your admin email address
      from: process.env.FROM_EMAIL!, // Verified sender email
      subject: 'Vertex FinCapital Message Received',
      html: `<table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif;background: #0C0C0C;">
        <thead>
            <tr>
                <td>
                    <img style="width: 100%" src="https://vertexfcapital.com/images/header.png" alt="Header" />
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 40px 40px; font-family: sans-serif; color:#0A0A0A;background: #0C0C0C;">

                    <h2 style="color: #FFF;
                    font-size: 32px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    border-bottom: 1px solid #242424;
                    padding-bottom: 24px;
                    margin-bottom: 24px;">
                      Vertex FinCapital <br>Message Received
                    </h2>

                    <h3 style="
                        color: #B6B6B6;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        ">
                        Hello, ${firstName},
                    </h3>

                    <p style="color: #B6B6B6;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;">
                        Thank you for contacting <b>Vertex FinCapital</b>.
                    </p>

                    <p style="color: #B6B6B6;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;">
                        We have received your message and will review your inquiry carefully. 
                        A member of our team will respond to you as soon as possible, 
                        typically within <b>2 business days</b>.
                    </p>


                    <p style="color: #B6B6B6;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;">
                        If your request is urgent or requires immediate assistance, please feel free to follow up by email at 
                        <a href="mailto:info@vertexfcapital.com" style="color: #B6B6B6;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        text-decoration: none;">info@vertexfcapital.com</a>.
                    </p>

                    <p style="color: #B6B6B6;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;">
                        Thank you for your interest in Vertex FinCapital.
                    </p>


                    <p style="color: #FFF;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    border-top: 1px solid #242424;
                    padding-top: 24px;
                    margin-top: 24px;">
                        Vertex FinCapital<br>
                        MAS-Regulated Investment Fund | Singapore
                    </p>


                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>
                    <img style="width: 100%" src="https://vertexfcapital.com/images/footer.png" alt="Footer" />
                </td>
            </tr>
        </tfoot>
    </table>
      `,
    };

    await sgMail.send(clientMSG);

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
