
import 'dotenv/config';
import 'express-async-errors';

import connectDB from './db/connect.js';
import express, { json } from "express";
import cors from 'cors';
const app = express();
import mainRouter from "./routes/user.js";

app.use(json());

app.use(cors())
app.use("/api/v1", mainRouter);
const password = encodeURIComponent(process.env.PASSWORD);
const connectionString = process.env.MONGO_URI.replace('@', `:${password}@`);


const port = process.env.PORT || 3000;
const start = async () => {

    try {        
        await connectDB(connectionString);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })

    } catch (error) {
       console.log(error); 
    }
}

start();

