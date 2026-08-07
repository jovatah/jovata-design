import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, projectType, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Jovata Website <info@jovata.design>",
      to: ["info@jovata.design"],
      replyTo: email,
      subject: `New Project Enquiry - ${name}`,
     html: `
        <div style="font-family: Arial, sans-serif; padding: 32px; color: #171717;">
            <p style="font-size: 12px; letter-spacing: 3px; text-transform: uppercase; color: #777;">
            Jovata Website
            </p>

            <h2 style="font-weight: 400; font-size: 28px; margin: 16px 0 32px;">
            New Project Enquiry
            </h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>

            <div style="margin-top: 24px;">
            <p><strong>Message:</strong></p>
            <p style="line-height: 1.7;">${message}</p>
            </div>

            <hr style="margin: 32px 0; border: none; border-top: 1px solid #ddd;" />

            <p style="font-size: 13px; color: #777;">
            Sent from the Jovata website contact form.
            </p>
        </div>
        `,
    });

    if (error) {
      return Response.json(error, { status: 500 });
    }

    return Response.json(data);
  }
   catch {
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}