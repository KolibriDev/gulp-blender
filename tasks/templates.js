var gulp    = require('gulp'),
    jade    = require('gulp-jade');

module.exports = {
  'templates-dev': {
    callback: function() {
      var cache   = require('gulp-cached'),
          connect = require('gulp-connect');
      return gulp.src('src/views/*.jade')
        .pipe( cache('templates-dev') )
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest('dev/'))
        .pipe( connect.reload() );
    }
  },
  'templates-dist': {
    callback: function() {
      return gulp.src('src/views/*.jade')
        .pipe(jade({
          pretty: false
        }))
        .pipe(gulp.dest('dist/'));
    }
  },
  // Run all templates tasks
  'templates': {
    deps: ['templates-dev', 'templates-dist']
  }
};
