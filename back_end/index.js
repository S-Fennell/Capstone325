import express, { Router } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import Subscriber from './models/subscribe.js'

const app = express();
const PORT = process.env.PORT;
app.use(express.json());



app.use(cors());

app.get('/', (req, res)=>{
    res.send('hello world')
})
// The post request to add users to my data base
app.post('/subscribers', async(req,res)=>{
    console.log(req.body)// requesting what is inside the body of the document to be added to data base
    try {
        const scriber = await Subscriber.create(req.body) //info from the form which is using the schema to create valid data input to be added
        res.status(200).json(scriber);
    } catch (error) {// if data is not valid an error will be generated
        res.status(500).json({message: error.message})
        console.log(error.message)
    }
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
