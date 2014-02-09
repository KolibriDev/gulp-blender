var gulp = require('gulp');

module.exports = {
  'server': {
    deps: ['default'],
    callback: function() {
      return gulp.start('connect', 'watch');
    }
  }
};
