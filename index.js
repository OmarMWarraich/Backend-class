const express = require('express');

const app = express();

const port = 5000; 

app.get('/', (req, res) => {
    console.log("hello world to first API")
})

app.listen(port,()=>{
    console.log("Server is Running...")
})