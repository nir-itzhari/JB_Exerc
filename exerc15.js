const express = require('express')
const app = express()

app.get('/', function (req, res) {


    res.send('This text returned from my nodejs server')
})

app.listen(3000)