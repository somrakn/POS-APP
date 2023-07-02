const express = require('express')
const router = express.Router();
const app = express();
const fs = require('fs');
const pdf = require('html-pdf');

app.use(router);
app.listen(8080, (rs) => console.log('hello'))
var html = fs.readFileSync('./html/index.html', 'utf8');
var options = { format: 'Letter' };

router.get('/a', (req, res, next) => {
  pdf.create(html, options).toBuffer((err, data) => {
    res.contentType("application/pdf");
    res.send(data);
  })
})



