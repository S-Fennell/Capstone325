import express, { Router } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import Subscriber from './models/subscribe.js';

import 'dotenv/config';


const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.post('/newSubscriber', (req,res)=>{
 
})
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next()
})

// user routes

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,"Subscribers.jsx"));
});








app.listen(3000, ()=>{
    console.log(`listening on port: ${PORT}`)

})
await mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`Connected to database!`);
    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`);
    });
}).catch(()=>{
    console.log(`Connection Failed!`);
});
