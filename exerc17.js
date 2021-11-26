const express = require('express')
const app = express()

app.get('/1978', function (req, res) {

    res.send('You whare born in 1978')

})

app.listen(3000)