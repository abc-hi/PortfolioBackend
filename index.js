import express from "express";
import cors from "cors"
import nodemailer from 'nodemailer'
import bodyParser from "body-parser";
import dbconnection from "./Database/DBConfig.js";
import contactrouter from './Router/ContactRouter.js';
import {sendEmail} from "./Mailer.js";



const app= express()
app.use(cors())
app.use(bodyParser.json())


const port=process.env.PORT

app.get("/",(req,res)=>{
    console.log("App is working")
    res.send("App is working"); // Send a response to the client
})





dbconnection()



app.use('/api', contactrouter)
    

    



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});