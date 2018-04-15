const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

const html = `
<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <title>Mocha - test</title>
  </head>
  <body>
    <h1>Display some html with js</h1>
    <div id="main"></div>
    <script type="module"  src="/app.js"></script>
  </body>
</html>`

app.get('*', (req, res) => {
    res.send(html)
    res.end()
  })
  
app.listen(8000)
  