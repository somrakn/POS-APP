const express = require('express')
const pdf = require('../service/service-pdf.js')

const router = express.Router();

router.get('/a', (req, res, next) => {
    res.json('hello')
})
router.get('/invoice', (req, res, next) => {
    pdf.buildPDF(res);
})
module.exports = router ;
