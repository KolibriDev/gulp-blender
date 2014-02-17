var gulp = require('gulp');

module.exports = {
  'watch': {
    callback: function() {
      gulp.watch('src/scss/**/*.scss',['styles-dev']);
      gulp.watch('src/js/**/*.js',['scripts-dev']);
      gulp.watch('src/views/**/*.jade',['templates-dev']);
      gulp.watch('src/img/**/*.{png,gif,jpg,jpeg}',['images-dev']);
      gulp.watch('src/img/**/*.{svg}',['vectors-dev']);
    }
  }
};
