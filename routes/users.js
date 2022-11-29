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




router.post('/', async(req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
    });

    try{

     const a1 =  await  user.save()
     res.json(a1);
    }catch(err){
       res.send('Error')
    }
})

module.exports = router;