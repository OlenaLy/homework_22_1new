const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path:  path.resolve(__dirname, 'build'),
        filename: 'bundle[fullhash].js',
        clean: true,
    },
    mode: 'development',
    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/img', to: 'img'}
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'style[fullhash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    "targets": {
                                        "edge": "17",
                                        "firefox": "60",
                                        "chrome": "68",
                                        "safari": "11.1",
                                        "ie": "9"
                                    }
                                }
                            ]
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ],
    },
    devServer: {
        port: 5500,
        static: {
            directory: path.join(__dirname, 'build')
        },
        devMiddleware: {
            writeToDisk: true
        },
        hot: true,
        open: true
    }
};