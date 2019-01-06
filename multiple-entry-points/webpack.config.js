const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    home: path.resolve(__dirname,  'src/js/index.js'),
    prices: path.resolve(__dirname,  'src/js/prices.js'),
    contacts: path.resolve(__dirname,  'src/js/contacts.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      //loaders go here
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          //['style-loader', 'css-loader']
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      }
    ]
  },
  plugins: [
    //plugins go here
    new ExtractTextPlugin('css/[name].css'),
  ]
};