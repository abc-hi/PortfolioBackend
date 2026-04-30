import Contact from "../Models/ContactSchema.js";

import { sendEmail } from "../Mailer.js";


export const createContact= async(req,res)=>{
     try {
    const newContact = new Contact(req.body);
    await newContact.save();

    console.log("data saved");

    // send only current submission
    const emailText = `
Portfolio Contact Form Submission:

Name: ${newContact.name}
Email: ${newContact.email}
Subject: ${newContact.subject}
Message: ${newContact.message}
    `;
console.log("before email")
    await sendEmail(
      "Portfolio Contact Form Submission",
      emailText
    );

    console.log("after email");

    res.status(200).json({
      message: "Contact saved and email sent successfully!",
      data: newContact
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};