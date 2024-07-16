import Contact from "../Models/ContactSchema.js";
import {sendEmail} from "../Mailer.js";


export const createContact= async(req,res)=>{
    try {
        
        
const newContact =new Contact(req.body)
await newContact.save()

res.status(200).json({message:"contact added successfully",data:[newContact]})


 // Fetch contact details from MongoDB
 const contacts = await Contact.find();

 // Prepare email content
 let emailText = 'Contact Form Submissions:\n\n';
 contacts.forEach(contact => {
   emailText += `Name: ${contact.name}\nEmail: ${contact.email}\nSubject: ${contact.subject}\nMessage: ${contact.message}\n\n`;
 });

 // Send email using Nodemailer
 await sendEmail('Contact Form Submissions', emailText);

 res.status(200).json({ message: 'Form submitted successfully!' });


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });

        
    }
}

 