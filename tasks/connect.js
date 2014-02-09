var connect = require('gulp-connect');

module.exports = {
  'connect': {
    callback: connect.server({
      root: './dev',
      port: 1337,
      livereload: true,
      open: {
        file: 'index.html',
        browser: 'Google Chrome'
      }
    })
  }
};
