const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.get('/', function (req, res) {

    const imgSrc = 'https://rt-ed.co.il/wp-content/uploads/2021/05/nodejs-logo-1.png'
    res.send('<h1 style="text-align:center; color: green; margin-top:200px">This text returned from my nodejs server<br/>'
        + '<img src="/image/nodejs.png" style="width:400px; hight: 400px; text-align:center;"/>')
})

app.listen(3000)

