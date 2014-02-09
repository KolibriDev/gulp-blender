var gulp = require('gulp');

module.exports = {
  'vectors-dev': {
    callback: function() {
      var cache = require('gulp-cached');
      return gulp.src('src/img/**/*.svg')
        .pipe( cache('vectors-dev') )
        .pipe( gulp.dest('dev/img/') );
    }
  },
  'vectors-dist': {
    callback: function() {
      var svgmin = require('gulp-svgmin');
      return gulp.src('src/img/**/*.svg')
        .pipe( svgmin() )
        .pipe( gulp.dest('dist/img/') );
    }
  },
  // Run all vectors tasks
  'vectors': {
    deps: ['vectors-dev', 'vectors-dist']
  }
};
