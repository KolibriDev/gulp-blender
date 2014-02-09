var gulp    = require('gulp'),
    jade    = require('gulp-jade'),
    connect = require('gulp-connect');

module.exports = {
  'templates': {
    callback: function() {
      return gulp.src('src/views/*.jade')
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest('dev/'))
        .pipe( connect.reload() );
    }
  }
};
