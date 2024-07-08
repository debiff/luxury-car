import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { contactUsFormSchema } from "@/types/contactUsForm";

export async function POST(request: NextRequest) {
  const { email, message } = await request.json();

  if (!contactUsFormSchema.safeParse(email, message).success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT as string),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL_BOOKING_FROM,
    to: process.env.EMAIL_BOOKING_TO,
    subject: `Open request`,
    text: `
    Email: ${email}
    Message: ${message}
    `
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  // TODO: send email to the client
  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
