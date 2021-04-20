const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

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
    historyApiFallback: true,
  },
  // add a custom index.html as the template
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
