const express = require('express')
const router = express.Router();
const app = express();
const fs = require('fs');
const pdf = require('html-pdf');

app.use(router);
app.listen(8080, (rs) => console.log('hello'))
// fs.writeFile("./html/index.html", "<b>Hey there!<b>", function(err) {
//   if(err) {
//       return console.log(err);
//   }
//   console.log("The file was saved!");
// }); 

// Or
// fs.writeFileSync('./html/index.html', 'Hey there!');
var html = fs.readFileSync('./html/index.html', 'utf8');
var options = { format: 'Letter',childProcessOptions: {
  env: {
    OPENSSL_CONF: '/dev/null',
  },
} };

router.get('/a', (req, res, next) => {
  try {
    pdf.create(html, options).toBuffer((er, stream) =>{
      res.contentType("application/pdf");
      console.log('error pass', er);
      // console.log('pass', stream);
      res.send(stream);
    })
  } catch (error) {
    res.send(error);
    console.log('error', error);
  }
 
  // pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
  //   if (err) return console.log(err);
  //   console.log(res); // { filename: '/app/businesscard.pdf' }
  // });
})

router.get('/b', (req, res, next) => {
  // var data =fs.
  // res.contentType("application/pdf");
  res.send('hello');
})


