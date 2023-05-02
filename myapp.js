const express = require("express");
const phone = require("./FeaturedJob.json");
const app=express();
const port=3000;
app.get('/',(req,res)=>{
 res.send("hello hukka hua");
})
app.get('/phones',(req,res)=>{
    res.send("hello hukka hua");
   })
app.listen(port,()=>{
    console.log(`example listening port${port}`);
})