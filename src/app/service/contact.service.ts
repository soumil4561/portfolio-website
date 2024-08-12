//nodemailer service to send email
require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (name: string, email: string, message: string) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
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
    html: `<div>${message}</div><p>Sent from:${email}</p>`,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.log(error);
      return {status: 500, message: error.message}
    } else {
      console.log("Email sent: " + info.response);
      return {status: 200, message: info.response}
    }
  });
};

export { sendEmail };
