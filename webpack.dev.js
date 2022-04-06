const { merge } = require('webpack-merge');
const commons = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(commons, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    assetModuleFilename: 'images/[name][ext]',
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'app/css/[name].css' })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
