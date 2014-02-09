var gulp    = require('gulp'),
    cache   = require('gulp-cached'),
    sass    = require('gulp-sass'),
    csso    = require('gulp-csso'),
    connect = require('gulp-connect');

module.exports = {
  'styles-dev': {
    callback: function() {
      return gulp.src('src/scss/*.scss')
        .pipe( cache('styles-dev') )
        .pipe(
          sass({
          includePaths: ['src/scss'],
          errLogToConsole: true
        })
        )
        .pipe( gulp.dest('dev/css/') )
        .pipe( connect.reload() );
    }
  },
  'styles-dist': {
    callback: function() {
      return gulp.src('src/scss/*.scss')
        .pipe(
          sass({
          includePaths: ['src/scss'],
          errLogToConsole: true
        })
        )
        .pipe( csso() )
        .pipe( gulp.dest('dist/css/') );
    }
  },
  // Run all styles tasks
  'styles': {
    deps: ['styles-dev', 'styles-dist']
  }
};
