const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/', "index.js")
  },
  output: {
    path: path.resolve(__dirname, './docs/'),
    publicPath: '/',
    filename: 'bookmarklet.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: ["style-loader", { loader: "css-loader", options: { url: false, modules: true } }]
      }]
  },
  devtool: 'eval',
  devServer: {
    contentBase: './public'
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './public/', to: './' }], {})
  ]
}