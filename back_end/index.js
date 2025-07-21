import express, { Router } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import Subscriber from './models/subscribe.js'

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use(cors());

app.post('/newSubscriber',async (req,res)=>{
    let subscriber = new Subscriber(req.body);
    let result = await subscriber.save()
 
})












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
