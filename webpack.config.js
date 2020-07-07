const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const reactCompilation = {
  entry: './components/main.js',
  output: {
    path: path.join(__dirname, '/bundle'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};

const copyFiles = {
  context: path.join(__dirname, './'),
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'fonts/**/*'),
        to: path.resolve(__dirname, 'bundle/fonts'),
        context: path.resolve(__dirname, 'fonts/'),
      },

    ]),
  ],
};

const scssCompilation = {
  entry: path.resolve(__dirname, './styles/styles.scss'),
  output: {
    path: path.resolve(__dirname, './bundle'),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: MiniCssExtractPlugin.loader, options: { sourceMap: true } },
        'css-loader',
        'sass-loader',
      ],

    }],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};

module.exports = [
  copyFiles, scssCompilation, reactCompilation,
];
