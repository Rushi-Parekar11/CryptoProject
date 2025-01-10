const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config;
const PORT = process.env.PORT || 8000;


// -------DataBase connection--------
mongoose.connect()


//--------Reqest Respons handel----------
app.get('/',(req,res)=>{
  res.send("all is ok")
})


app.listen(PORT,console.log(`app listen at PORT ${PORT}`));
