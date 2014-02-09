var gulp = require('gulp'),
    cache   = require('gulp-cached'),
    imagemin = require('gulp-imagemin'),
    svgmin = require('gulp-svgmin');

module.exports = {
  'images': {
    callback: function() {
      return gulp.src('src/img/**/*.{png,gif,jpg,jpeg}')
        .pipe( cache('images') )
        .pipe( imagemin() )
        .pipe( gulp.dest('dev/') );
    }
  },
  'vectors': {
    callback: function() {
      return gulp.src('src/img/**/*.svg')
        .pipe( cache('vectors') )
        .pipe( svgmin() )
        .pipe( gulp.dest('dev/img/') );
    }
  }
};
