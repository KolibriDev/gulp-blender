'use strict';

module.exports = function(gulp) {
  gulp.task('rimraf', function() {
    var path = gulp.plugin.util.env.prod ?
      gulp.cfg.env.production.dir : gulp.cfg.env.development.dir;
    return gulp.src(path +'/*', {read: false})
      .pipe( gulp.plugin.rimraf() );
  });
};
