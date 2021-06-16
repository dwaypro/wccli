const path = require('path');

const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: { app: './src/index.js' },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },

    ],
  },
  externals: {

  }

};