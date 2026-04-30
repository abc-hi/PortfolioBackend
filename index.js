import express from "express";
import cors from "cors"
import nodemailer from 'nodemailer'
import bodyParser from "body-parser";
import dbconnection from "./Database/DBConfig.js";
import contactrouter from './Router/ContactRouter.js';
import {sendEmail} from "./Mailer.js";
import dotenv from "dotenv";
dotenv.config();



const app= express()
//things comes under app.use are default middleware
//things we write in router , controller are custom middleware
app.use(cors())
app.use(bodyParser.json())


const port=process.env.PORT

app.get("/",(req,res)=>{
    console.log("App is working")
    res.send("App is working"); // Send a response to the client
})





dbconnection()



app.use('/api', contactrouter)
    

    
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PWD exists:", !!process.env.EMAIL_PWD);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});