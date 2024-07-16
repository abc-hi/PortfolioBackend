import mongoose from "mongoose";



const contactschema=mongoose.Schema(
    {name:String,
        email:String,
        subject:String,
        message:String
    }
)
const Contact = mongoose.model("Contact",contactschema)
export default Contact;