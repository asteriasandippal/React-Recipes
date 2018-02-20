const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

const config = {
    context: path.join(__dirname, 'src'),
    entry: ['whatwg-fetch','./index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpeg|jpg)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        }),

        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL)
        })
    ]
}

module.exports = config;
