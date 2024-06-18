import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const {
    name,
    email,
    phone,
    car,
    color,
    pickUpDate,
    pickUpLocation,
    dropOffDate,
    dropOffLocation
  } = await request.json();

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT as string),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  return NextResponse.json({
    message: `${process.env.EMAIL_USER},
    ${process.env.EMAIL_PASSWORD},
    ${process.env.EMAIL_BOOKING_FROM},
    ${process.env.EMAIL_BOOKING_TO}`
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL_BOOKING_FROM,
    to: process.env.EMAIL_BOOKING_TO,
    subject: `Reservation for ${car} for ${name}`,
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Car: ${car}
    Color: ${color}
    Pick up date: ${pickUpDate}
    Pick up location: ${pickUpLocation}
    Drop off date: ${dropOffDate}
    Drop off location: ${dropOffLocation}
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
