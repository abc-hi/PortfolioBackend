import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();

// Create a transporter object using SMTP transport
// createTransport is default fn in nodemailer, it has service and auth objects
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PWD   
  }
});

// Function to send email
export const sendEmail = async (subject, text) => {
  try {
    let info = await transporter.sendMail({
      from: 'revathimohancse@gmail.com',   // Your email address
      to: 'revathimohancse@gmail.com',     // Your email address where you want to receive the submissions
      subject: subject,
      text: text
    });
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
