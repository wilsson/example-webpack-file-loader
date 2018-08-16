const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|svg|woff2|woff|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name][hash].[ext]',
                    publicPath: '/'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}