const createDevConfig = require('./config/webpack.config.dev');

module.exports = function (env, { mode }) {
  if (mode === 'development') {
    return createDevConfig(__dirname, env)
  }

  if (mode === 'production') {
    return console.log('START PROD');
  }
}
