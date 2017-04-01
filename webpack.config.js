


module.exports = {
    entry: './src/app.js',
    watch:true,
    output: {
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}