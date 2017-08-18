var babelpolyfill = require("babel-polyfill");
module.exports = {
    devtool: 'eval-source-map',
    entry:__dirname+"/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.(js?|jsx?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: [
                'style-loader?sourceMap',
                'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]',
            ]
        },
        {
            test: /\.less$/,
            loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]',
                'resolve-url',
                'less?sourceMap'
            ]
        },{
            // 小于8KB的图片使用base64内联
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    }
}