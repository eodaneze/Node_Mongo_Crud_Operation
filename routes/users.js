const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("API IS RUNNING")
    console.log("API IS RUNNING");
})

module.exports = router