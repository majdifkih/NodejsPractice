const express = require("express");
const app = express();
const voiture = require('./routes/voiture');
const env = require('dotenv').config();
const mongoose = require('mongoose');
app.use("/voiture",voiture);

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected to MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log(`listening on port ${process.env.PORT}`);
    
    })
}).catch((err)=>{
    console.error('Error connecting to MongoDB', err.message);
})





