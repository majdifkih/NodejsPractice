const express = require('express');
const app = express.Router();

 

 const posts=[
    {id:"1",titre:"post 1",content:"Hello in post 1"},
    {id:"2",titre:"post2",content:"Hello in post 2"}
   ];
 app.get('/post/all',(req,res)=>{
   
    res.json(posts); 

});

app.get('/post/:id',(req, res) => {
    console.log("ID=",req.params.id);
    res.send();
});  


module.exports = app;