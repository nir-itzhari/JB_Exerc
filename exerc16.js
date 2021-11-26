const express = require('express')
const app = express()

app.get('/', function (req, res) {

    res.send(req.query.num1 + " + " + req.query.num2 )

})

app.listen(3000)