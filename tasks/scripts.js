var gulp    = require('gulp'),
    // notify  = require('gulp-notify'),
    jshint  = require('gulp-jshint'),
    cache   = require('gulp-cached'),
    uglify  = require('gulp-uglify'),
    connect = require('gulp-connect');

module.exports = {
  'scripts': {
    deps: ['script-lint'],
    callback: function() {
      return gulp.src('src/js/**/*.js')
        .pipe( cache('scripts') )
        .pipe( uglify() )
        .pipe( gulp.dest('dev/js/') )
        .pipe( connect.reload() );
    }
  },
  'script-lint': {
    callback: function() {
      return gulp.src('src/js/**/*.js')
        .pipe( cache('script-lint') )
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
  }
};
