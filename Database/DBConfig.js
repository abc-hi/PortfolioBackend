import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const connectionstring =process.env.MONGODBCONNECTIONSTRING

const dbconnection = async()=>{
try{
    const connection =await mongoose.connect(connectionstring)
    console.log(connection);
    console.log("mongodb connected")
    return connection
    
}
catch(err){
    console.log(err)
}
}
export default dbconnection;
