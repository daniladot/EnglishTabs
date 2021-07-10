const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {test: /\.svg$/, use: 'svg-inline-loader'},
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader'],
            },
            {test: /\.s[ac]ss$/i, use: ["css-loader","sass-loader",  "style-loader"]},
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            }
            ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: 'dist/'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'production',
}
