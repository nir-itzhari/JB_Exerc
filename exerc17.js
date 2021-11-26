const express = require('express')
const app = express()

app.get('/:bornYear', function (req, res) {

    res.send('You whare born in '+ req.params.bornYear)

})

app.listen(3000)