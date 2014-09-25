'use strict';

module.exports = function(gulp) {
  gulp.task('rimraf', function() {
    return gulp.src(gulp.cfg.env.dir +'/*', {read: false})
      .pipe( gulp.plugin.rimraf() );
  });
};
