const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

function createMainConfig(rootDir) {
  const pathResolve = (source) => path.resolve(rootDir, source);

  return {
    entry: pathResolve('src/index.tsx'),
    output: {
      filename: '[name].[chunkhash].js',
      path: pathResolve('build')
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { compact: false },
          },
        }, {
          test: /\.tsx$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-typescript']
            }
          }
        }, {
          test: /\.(png|pgn|svg|jpe?g|gif|webp)$/i,
          use: [{ loader: 'file-loader' }],
        }, {
          test: /\.(woff(2)?|ttf|otf)$/,
          use: [{ loader: 'file-loader' }],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new CleanWebpackPlugin(),
    ]
  }
}

module.exports = createMainConfig;
