const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')
const path = require('path')

module.exports = {

    context: path.resolve(__dirname, 'src/client'),

    entry: {
      app: ['./hydrate.jsx','./app.scss'],
    },

    mode: process.env.NODE_ENV || 'development',

    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].css' })
      ],

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'public/dist/static'),
        filename: '[name].js'
    },

    resolve: {
      extensions: ['.jsx', '.js']
    },

    module: {   
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /.(scss|css)$/,
                use: [{
                  loader: MiniCssExtractPlugin.loader
                }, {
                  loader: "css-loader",
                  options: {
                    url: false,
                  }
                }, {
                  loader: "sass-loader"
                }]
            },
        ]
    },

}