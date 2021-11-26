const express = require('express')
const app = express()

app.get('/:bornYear', function (req, res) {

    res.send(
        '<div style="margin-top:200px"><h2 style="text-align: center">You whare born in </h2> <h1 style="text-align: center; font-family: david;"><b>'
            + req.params.bornYear + '</b></h1>' + '</div>'
    )

})

app.listen(3000)