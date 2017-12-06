var webpack = require('webpack')

module.exports = {
    entry: {
        'ourq': './src/index.js'
    },
    output:{
        filename: 'dist/[name].js'
    }
}