var gulp    = require('gulp'),
    cache   = require('gulp-cached'),
    jade    = require('gulp-jade'),
    connect = require('gulp-connect');

module.exports = {
  'templates': {
    callback: function() {
      return gulp.src('src/views/*.jade')
        .pipe( cache('templates') )
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest('dev/'))
        .pipe( connect.reload() );
    }
  }
};
