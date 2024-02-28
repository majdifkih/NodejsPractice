const express = require('express');
const env = require('dotenv').config();
const mongoose = require('mongoose');
//creer une instance d'express
const app = express(); 
const posts =require('./routes/post');
const auth =require('./routes/auth');

app.use('/post',posts)
app.use('/auth',auth)



// app.get('/', (req, res) => {
//     res.send('welcome');
// });
// app.get('/template', (req, res) => {
//     res.sendFile(__dirname+'/index.html');

// });
// app.get('/middle',(req,res,next)=>{
//     console.log('Request number 1');
//     next();
// },(req, res, next) => {
//     res.send('Request number 2');
    
// });


//Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected to MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log(`listening on port ${process.env.PORT}`);
    
    })
}).catch((err)=>{
    console.error('Error connecting to MongoDB', err.message);
})