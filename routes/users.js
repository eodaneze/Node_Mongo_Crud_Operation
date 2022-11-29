const { Router } = require('express');
const express = require('express');

const router = express.Router();

const User = require('../models/userModels')

router.get('/', async(req, res) => {
    try{
        const users = await User.find();
        res.json(users)
    }catch(err){
        res.status(404).send("ERROR OCCURED")
    }
})




module.exports = router;