const express = require('express');
const app = express();
require('dotenv').config();

const Hide = process.env.HIDE;

app.get('/',(req,res)=>{
    res.send('hello!')
})

app.listen(3000, ()=> {
    console.log(`server listen ... ${Hide}`)
})