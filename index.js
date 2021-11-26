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
let personsArray = []
app.post('/persons', (req, res) => {
    personsArray.push(req.body)
    console.log(personsArray)
    res.json(personsArray)

})

app.get('/persons/:id', (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    if (req.params.id === personsArray[0].userId) {
        return res.send(personsArray[0])

    }
    return res.json({ message: 'This person doesn\'t exist' })

})

app.listen(3000)






