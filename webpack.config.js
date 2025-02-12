const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '/public'),
        filename: 'webpack_dist.js',
    },
};