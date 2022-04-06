const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js', fontawesome: './src/fontawesome.js' },
  output: {
    path: path.resolve(__dirname, 'build/'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.ejs',
      favicon: './src/images/favicon-32x32.png',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(svg|jpe?g|png)/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'ejs-compiled-loader',
          },
        ],
      },
    ],
  },
};
