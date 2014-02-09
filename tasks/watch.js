var gulp = require('gulp');

module.exports = {
  'watch': {
    callback: function() {
      gulp.watch('src/scss/**/*.scss',['styles']);
      gulp.watch('src/js/**/*.js',['scripts']);
      gulp.watch('src/views/**/*.jade',['templates']);
    }
  }
};
