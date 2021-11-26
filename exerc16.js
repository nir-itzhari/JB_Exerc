const express = require('express')
const app = express()

app.get('/', function (req, res) {


    const num1 = +req.query.num1
    const num2 = +req.query.num2
    const result = num1 + num2
    res.send('Result :' + result)

})

app.listen(3000)