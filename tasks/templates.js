var gulp    = require('gulp'),
    cache   = require('gulp-cached'),
    jade    = require('gulp-jade'),
    connect = require('gulp-connect');

module.exports = {
  'templates-dev': {
    callback: function() {
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
        .pipe(gulp.dest('dist/'))
        .pipe( connect.reload() );
    }
  },
  // Run all templates tasks
  'templates': {
    deps: ['templates-dev', 'templates-dist']
  }
};
