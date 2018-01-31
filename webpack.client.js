const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const clientConfig = {
  // specify root file of server app
  entry: './src/client/client.js',

  // specify where to put generated bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = merge(baseConfig, clientConfig);
