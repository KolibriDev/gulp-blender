var gulp    = require('gulp'),
    // notify  = require('gulp-notify'),
    cache   = require('gulp-cached');

module.exports = {
  'scripts-lint': {
    callback: function() {
      var jshint = require('gulp-jshint');
      return gulp.src('src/js/**/*.js')
      .pipe( cache('scripts-lint') )
      .pipe( jshint('./.jshintrc') )
      .pipe( jshint.reporter('default') )
      // TODO: Figure out a way to stop this task on jshint failure,
      //        without stopping the whole 'watch' task
      // .pipe( jshint.reporter('fail') )
      // .on('error', notify.onError(function(error) {
      //   return 'jshint failed ' + error.message;
      // }))
      ;
    }
  },
  'scripts-dev': {
    deps: ['scripts-lint'],
    callback: function() {
      var connect = require('gulp-connect');
      return gulp.src('src/js/**/*.js')
      .pipe( cache('scripts-dev') )
      .pipe( gulp.dest('dev/js/') )
      .pipe( connect.reload() );
    }
  },
  'scripts-dist': {
    deps: ['scripts-lint'],
    callback: function() {
      var uglify = require('gulp-uglify');
      return gulp.src('src/js/**/*.js')
      .pipe( uglify() )
      .pipe( gulp.dest('dist/js/') );
    }
  },
  // Run all scripts tasks
  'scripts': {
    deps: []
  }
};
