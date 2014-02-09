var gulp    = require('gulp'),
    clean   = require('gulp-clean');

module.exports = {
  'clean-dev': {
    callback: function() {
      return gulp.src('dev/*', {read: false})
        .pipe( clean() );
    }
  },
  'clean-dist': {
    callback: function() {
      return gulp.src('dist/*', {read: false})
        .pipe( clean() );
    }
  },
  // Run all clean tasks
  'clean': {
    deps: ['clean-dev', 'clean-dist']
  }
};
