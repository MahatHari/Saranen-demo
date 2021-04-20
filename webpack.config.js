const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';
module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',

  // app entry point is /src/index.js
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    // the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'dist'),

    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        //for anyfile with suffix of js or jsx
        test: /\.jsx?$/,

        // ignore transpiling Javascript from node_modules
        exclude: /node_modules/,

        //use babel-loader for transpiling javascript to a suitable format
        loader: 'babel-loader',

        options: {
          //attach the preset to the loader, can also be done in seperate .babelrc file
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false,
  },
  // add a custom index.html as the template
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://localhost:3001'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
