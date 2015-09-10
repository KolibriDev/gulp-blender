'use strict';

module.exports = function(gulp) {
  var del = require('del');
  gulp.task('clean', function() {
    return del([gulp.cfg.envdir]);
  });
};
