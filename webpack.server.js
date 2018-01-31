const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

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
};

module.exports = merge(baseConfig, serverConfig);
