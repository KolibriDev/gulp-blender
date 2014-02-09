var gulp = require('gulp'),
    cache   = require('gulp-cached'),
    imagemin = require('gulp-imagemin');

module.exports = {
  'images-dev': {
    callback: function() {
      return gulp.src('src/img/**/*.{png,gif,jpg,jpeg}')
        .pipe( cache('images-dev') )
        .pipe( gulp.dest('dev/') );
    }
  },
  'images-dist': {
    callback: function() {
      return gulp.src('src/img/**/*.{png,gif,jpg,jpeg}')
        .pipe( imagemin() )
        .pipe( gulp.dest('dist/') );
    }
  },
  // Run all images tasks
  'images': {
    deps: ['images-dev', 'images-dist']
  }
};
