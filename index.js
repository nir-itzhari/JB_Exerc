const { verify } = require('crypto')
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.get('/', function (req, res) {
    const fileFullName = path.join(__dirname, './index.html')
    fs.readFile(fileFullName, 'utf-8', (error, htmlString) => {
        res.send(htmlString)
    })
})
const personsArray = []
app.post('/persons', (req, res) => {
    personsArray.push(req.body)
    console.log(personsArray)
    res.json(personsArray)

})

app.get('/persons/:id', (req, res) => {
    const { userId } = personsArray[0];
    if (req.params.id === userId) {
        return res.send(
            '<ul style="font-size:20px"><span style="font-size: 26px">User Details:</span>' +
            '<li><b> Name: </b>' + personsArray[0].firstName + '</li>' +
            '<li><b> Last Name: </b>' + personsArray[0].lastName + '</li>' +
            '<li><b> ID: </b>' + personsArray[0].userId + '</li>'
        )
    }
    return res.send('<h2 style="text-align: center; margin-top:200px"><b>message: ' + '<span style="color: red">' +'This person doesn\'t exist<span></b></h2>' )

})


app.listen(3000)






