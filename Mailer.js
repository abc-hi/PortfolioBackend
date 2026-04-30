import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();

// Create a transporter object using SMTP transport
// createTransport is default fn in nodemailer, it has service and auth objects
const transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PWD   
  },
    debug: true,
  logger: true
});

// Function to send email
export const sendEmail = async (subject, text) => {
  try {
     console.log("🚀 Sending email...");
    let info = await transporter.sendMail({
      from: `"Portfolio App"<${process.env.EMAIL_USER}>`,   // Your email address
      replyTo: 'revarevs87@gmail.com',                           // Your email address where you want to receive the submissions
      subject: subject,
      text: text,
        html: `<p>${text.replace(/\n/g, "<br>")}</p>`
    });
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
     throw error;
  }
};
