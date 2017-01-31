var webpack = require('webpack');

module.exports = {
  entry: {
    'app': "./assets/app/main.ts"
  },
  resolve: {
    extentions: ['.js', '.ts']
  },

  module: {
    loader: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /.css/,
        loader: 'raw'
      }
    ]
  }
};
