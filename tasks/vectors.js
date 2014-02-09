var gulp = require('gulp'),
    cache   = require('gulp-cached'),
    svgmin = require('gulp-svgmin');

module.exports = {
  'vectors-dev': {
    callback: function() {
      return gulp.src('src/img/**/*.svg')
        .pipe( cache('vectors-dev') )
        .pipe( gulp.dest('dev/img/') );
    }
  },
  'vectors-dist': {
    callback: function() {
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
