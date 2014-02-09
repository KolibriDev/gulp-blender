var gulp = require('gulp');

module.exports = {
  'images-dev': {
    callback: function() {
      var cache = require('gulp-cached');
      return gulp.src('src/img/**/*.{png,gif,jpg,jpeg}')
        .pipe( cache('images-dev') )
        .pipe( gulp.dest('dev/') );
    }
  },
  'images-dist': {
    callback: function() {
      var imagemin = require('gulp-imagemin');
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
