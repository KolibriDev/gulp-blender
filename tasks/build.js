var gulp = require('gulp');

module.exports = {
  'build-dev': {
    deps: ['clean-dev'],
    callback: function() {
      return gulp.start('scripts', 'styles', 'templates');
    }
  }
};
