const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const createMainConfig = require('./webpack.config.main');

function createDevConfig(rootDir) {
  const configMain = createMainConfig(rootDir);

  const devConfig = {
    mode: 'development',
    output: {
      publicPath: '/'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
      port: 3002,
      compress: true,
    },
    module: {
      rules: [
        {
          test: /.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
              },
            },
          ],
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      })
    ],
  }

  return merge(configMain, devConfig);
}

module.exports = createDevConfig
