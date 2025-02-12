const webpack = require('webpack');
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const config = {
    entry: "./src/index.js",
    output: {
        filename: "webpack_output.js",
        path: path.resolve(__dirname, "../public/dist/") // 👈 Change output directory
    },
    mode: "development"
};

webpack(config, (err, stats) => {
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

