var gulp = require('gulp');

module.exports = {
  'default': {
    callback: function() {
      return gulp.start('build-dev');
    }
  }
};
