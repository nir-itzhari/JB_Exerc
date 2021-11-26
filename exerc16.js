const express = require('express')
const app = express()

app.get('/', function (req, res) {


    const num1 = +req.query.num1
    const num2 = +req.query.num2
    const result = num1 + num2
    res.send('<div style="text-align: center; margin-top: 200px"><h1 style="display: inline-block; width: 120px">Result :</h1>'
                            + '<span style="display: inline-block; color: blue; font-size: 3.5em">' + result + '.</span></div>')

})

app.listen(3000)