import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'revathimohancse@gmail.com', // Your email address
    pass: 'xqet dmxc khfg hnhr'   // Your email password (or app password)
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
