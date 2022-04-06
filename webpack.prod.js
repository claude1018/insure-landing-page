const { merge } = require('webpack-merge');
const commons = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = merge(commons, {
  mode: 'production',
  output: {
    filename: 'app/js/[name].[contenthash].bundle.js',
    assetModuleFilename: 'app/images/[name].[hash][ext]',
  },
  optimization: {
    minimizer: [
      '...',
      new ImageMinimizerPlugin({
        minimizer: {
          /** Configuration from
           * https://webpack.js.org/plugins/image-minimizer-webpack-plugin/
           * Since I dont understand how it works :)
           */
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              [
                'svgo',
                {
                  plugins: [
                    {
                      name: 'removeViewBox',
                      active: false,
                    },
                    {
                      name: 'addAttributesToSVGElement',
                      params: {
                        attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'app/css/[name].[contenthash].css' }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
