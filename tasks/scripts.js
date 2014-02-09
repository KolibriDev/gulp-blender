var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    connect = require('gulp-connect');

module.exports = {
  'scripts': {
    callback: function() {
      return gulp.src('src/js/**/*.js')
        .pipe( uglify() )
        .pipe( gulp.dest('dev/js/') )
        .pipe( connect.reload() );
    }
  }
};
