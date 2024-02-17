const express = require("express");
const app = express();
const port=5000;
const voiture = require('./routes/voiture');

app.use("/voiture",voiture);


app.listen(port,()=>{
    console.log("listening on port 5000");

});




