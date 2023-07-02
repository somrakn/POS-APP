const express = require('express')
const router = express.Router();

router.get('/a', (req, res, next) => {
    res.json('hello')
})
module.exports = router ;
