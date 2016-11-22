var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app') + '/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/assets'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      include: path.resolve(__dirname, 'app'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
    ]
  },
  devServer: {
    stats: 'errors-only'
  }


};
