var gulp    = require('gulp'),
    clean   = require('gulp-clean');

module.exports = {
  'clean-dev': {
    callback: function() {
      return gulp.src('dev/*', {read: false})
        .pipe( clean() );
    }
  }
};
