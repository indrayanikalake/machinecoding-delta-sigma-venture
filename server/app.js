const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose =  require('mongoose');
const products = require("./routes/products")

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.use('/products',products);


mongoose.connect(process.env.URL)
.then(()=>{
console.log("connected to mongodb")
app.listen(process.env.ADRESS,()=>{
    console.log(`server stated on port ${process.env.ADRESS}`)
})
})
.catch((error)=>console.log("connection error",error))


