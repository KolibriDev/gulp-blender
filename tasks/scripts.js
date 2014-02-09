var gulp    = require('gulp'),
    cache   = require('gulp-cached'),
    uglify  = require('gulp-uglify'),
    connect = require('gulp-connect');

module.exports = {
  'scripts': {
    callback: function() {
      return gulp.src('src/js/**/*.js')
        .pipe( cache('scripts') )
        .pipe( uglify() )
        .pipe( gulp.dest('dev/js/') )
        .pipe( connect.reload() );
    }
  }
};
