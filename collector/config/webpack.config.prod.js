const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const createMainConfig = require('./webpack.config.main');

function createProdConfig(rootDir) {
  const configMain = createMainConfig(rootDir);

  const configProd = {
    mode: 'production',
    output: {
      publicPath: '/',
    },
    performance: {
      hints: false,
      maxEntrypointSize: 200000,
      maxAssetSize: 512000,
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
            compress: {
              drop_console: false,
            },
          },
          extractComments: false,
        }),
      ],
      splitChunks: {
        chunks: 'all',
        maxSize: 40000,
        minSize: 10000,
      },
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
                modules: false,
                sourceMap: false,
              },
            },
          ],
        }
      ]
    },
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map',
      })
    ]
  }

  return merge(configMain, configProd);
}

module.exports = createProdConfig
