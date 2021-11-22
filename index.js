const express = require('express')
const fs = require('fs')
const path = require('path')
const { send } = require('process')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.get('/', function (req, res) {
    const fileFullName = path.join(__dirname, './public/fetch.html')
    fs.readFile(fileFullName, 'utf-8', (error, htmlString) => {
        console.log(console.log(error))
        res.send(htmlString)
    })
})

app.post('/register', (req, res) => {
    console.log(req.body)
    const checkResponse = () => {
        for (let user of req.body.users) {
            if (user.email === req.body.inputValue.email) {
                return sendResponse(true)
            }
        }
        return sendResponse(false)
    }
    const sendResponse = (emailCheckResponse) => {
        if (emailCheckResponse === true) {
            res.json({ message: 'Email Alreay taken.' })
        }
        res.json(req.body.inputValue)

    }
    checkResponse()
})
app.listen(3030)






