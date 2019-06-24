const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: './client/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          // for babel-loader 8.x | babel 7.x
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.css/,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  },
  devServer: {
    publicPath: '/build',
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
