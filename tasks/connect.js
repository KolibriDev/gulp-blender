'use strict';

module.exports = function(gulp) {
  var prod = gulp.plugin.util.env.prod;

  gulp.task('connect', function() {
    return gulp.plugin.connect.server({
      root: [(prod ?
        gulp.cfg.env.production.dir : gulp.cfg.env.development.dir)],
      port: gulp.cfg.connect.port,
      livereload: gulp.cfg.connect.livereload
    });
  });
};
