import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

const sendEmail = async (name: string, email: string, message: string) => {
  const transporter = nodemailer.createTransport({
    host: String(process.env.EMAIL_HOST) || "",
    port: Number(process.env.EMAIL_PORT) || 0,
    secure: Boolean(true),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    // console.log(info);
    return { status: 200, message: "Email sent", info: info };
  } catch (error) {
    console.log(error);
    return { status: 500, message: error };
  }
};

export { sendEmail };
