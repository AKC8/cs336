const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//node.js is a platform for building server side event driven applications using JavaScript
// express. js is a framework based on node.js for building web applications using the priciples and approaches of node.js

//package.json gives a description for the server. It has keywords, description, author and other information for curious users
