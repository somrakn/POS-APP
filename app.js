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
  // pdf.create(html, options).toStream((err, stream) => {
    
  //   var data =fs.ReadStream(stream)
  //   res.contentType("application/pdf");
  //   res.send(data);
  // })
  try {
    pdf.create(html, options).toFile('businesscard.pdf', function(err, fn) {
      if (err) return console.log(err);
      res.contentType("application/pdf");
      res.download('businesscard.pdf');
    });
    
  } catch (error) {
    res.send(error);
  }
})

router.get('/b', (req, res, next) => {
  var data =fs.ReadStream
  res.contentType("application/pdf");
  res.send(data);
})


