const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const url = 'mongodb://localhost/Crud'
dotenv.config()

const app = express();

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', ()=> {
    console.log('Connected to database');
})

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        "firstName": "Daniel ezeali"
    })
    console.log('API IS RUNNING');
})


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server is running on port: http://localhost:${PORT}`));