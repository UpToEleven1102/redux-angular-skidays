const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    devServer: {
        inline:true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                loader: "babel-loader",
                options: {
                    presets: ['env', 'stage-0', 'react']
                }
            },{
                test: /\.css$/,
                loader: "css-loader"

            },
            {
                test: /\.scss/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    }
}