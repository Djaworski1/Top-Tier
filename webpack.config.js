const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = [
  './client/index.js'
];

const output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist/',
  filename: 'bundle.js',
};

module.exports = {
  mode: 'development',
  entry,
  output,
  devtool: "eval-source-map",
  module: {
    rules:[
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    ]
  },
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname)
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
     template: 'index.html'
    }),
  ],
};    
          