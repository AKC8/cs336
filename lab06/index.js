const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/public'))
//app.get('/', (req, res) => res.send('Hello World!'))

const writeResponseInBody = (req, res, method) => {
  res.status(200)
  res.send('Hello ${method} - ${JSON.stringify(req.body)}')
}

const writeResponse = (req, res, method) => {
  res.status(200)
  res.send('hello ${method}')
}


app.get('/request', (req, res) => writeResponse(req, res, 'GET'))
app.post('/request', (req, res) => writeResponseInBody(req, res, 'POST'))
app.put('/request', (req, res) => writeResponseInBody(req, res, 'PUT'))
app.delete('/request', (req, res) => writeResponse(req, res, 'DELETE'))
app.head('/request', (req, res) => writeResponse(req, res, 'HEAD'))
app.all('/request', (req, res) => res.sendStatus(501));
app.post('/forms', (req, res) => writeResponseInBody(req, res, 'POST'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
