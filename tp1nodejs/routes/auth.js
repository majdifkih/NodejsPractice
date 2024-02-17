const express = require('express');
const app = express.Router();

app.get('/login', (req, res) => {
    res.send('<h1> Welcome</h1> <p>Back</p>');
 });


 app.get('/register', (req, res) => {
    res.sendFile('index.html',{root:'./'});
 });



module.exports = app;