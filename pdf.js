const express = require('express')
const reuter = require('./router/index.js')

const app = express();

app.use(express.json())
app.use(reuter)
app.listen(8080, (rs) => console.log('hello'))