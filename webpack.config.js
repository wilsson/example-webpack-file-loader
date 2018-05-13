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
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name][hash].[ext]',
                    publicPath: '/'
                }
            },
            {
                test: /\.(eot|otf|svg|ttf|woff)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name][hash].[ext]',
                    publicPath: '/'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}