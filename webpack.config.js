const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

const entry = [
  './client/index.js'
];

const output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/',
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
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ]
        },
    ]
  },
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname)
    },
    hot: true,
    proxy: {
        '/updateState': {
            target: 'http://localhost:3000/',
            secure: false,
        }
      },
  },
  
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
     template: 'index.html'
    }),
    new CopyPlugin({
        patterns: [{ from: './client/scss/application.scss' }],
    }),
  ],
};    
          