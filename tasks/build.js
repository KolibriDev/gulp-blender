var gulp = require('gulp');

module.exports = {
  'build-dev': {
    deps: ['clean-dev'],
    callback: function() {
      return gulp.start('scripts-dev', 'styles-dev', 'templates-dev', 'images-dev', 'vectors-dev');
    }
  },
  'build-dist': {
    deps: ['clean-dist'],
    callback: function() {
      return gulp.start('scripts-dist', 'styles-dist', 'templates-dist', 'images-dist', 'vectors-dist');
    }
  },
  // Run all build tasks
  'build': {
    deps: ['build-dev', 'build-dist']
  }
};
