const path = require('path');

module.exports = {
  // specify root file of server app
  entry: './src/client/client.js',

  // specify where to put generated bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  // run bable on every js file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
    ],
  },
};
