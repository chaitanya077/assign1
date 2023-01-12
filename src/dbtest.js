const express = require('express')
const app = express();
const mysql = require("mysql")

app.get("/",(req,res)=>{
    const sqlInsert = ''
    res.send("hello world");
})


app.listen(3001,()=>{
    console.log("server is running on port 3001");
})