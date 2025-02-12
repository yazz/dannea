const webpack = require('webpack');
const express = require('express')
const app = express()
const port = 3000

webpack({}, (err, stats) => {
    if (err || stats.hasErrors()) {
        // ...
    }
    // Done processing
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'))