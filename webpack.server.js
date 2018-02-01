const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
  // build bundle for nodeJs, not browser
  target: 'node',

  // specify root file of server app
  entry: './src/index.js',

  // specify where to put generated bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
