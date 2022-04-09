const path = require('path');

module.exports = function () {
  const pathResolve = (source) => path.resolve(__dirname, source);

  return {
    mode: 'production',
    entry: './src/lib/index.ts',
    output: {
      path: pathResolve('dist'),
      filename: 'index.js',
      libraryTarget: 'umd',
      clean: true
    },
    resolve: {
      extensions: ['.ts', '.tsx', 'css']
    },
    externals: {
      react: 'react'
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        }
      ]
    }
  }
}
