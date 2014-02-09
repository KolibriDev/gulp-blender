var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    csso    = require('gulp-csso'),
    connect = require('gulp-connect');

module.exports = {
  'styles': {
    callback: function() {
      return gulp.src('src/scss/*.scss')
        .pipe(
          sass({
          includePaths: ['src/scss'],
          errLogToConsole: true
        })
        )
        .pipe( csso() )
        .pipe( gulp.dest('dev/css/') )
        .pipe( connect.reload() );
    }
  }
};
