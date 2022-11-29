const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const url = 'mongodb://localhost/Crud'
const userRouter = require("./routes/users")
dotenv.config()

const app = express();

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', ()=> {
    console.log('Connected to database');
})

app.use(express.json());

app.use('/users', userRouter)


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server is running on port: http://localhost:${PORT}`));