'use strict';

module.exports = function(gulp) {
  gulp.task('serve', ['server']);
  gulp.task('server', ['build'], function() {
    // http://www.browsersync.io/docs/options/
    gulp.plugin.browserSync.init({
      port: gulp.cfg.server.port,
      server: {
        baseDir: gulp.cfg.env.dir,
      },
      ui: {
        port: gulp.cfg.server.uiport,
      },
      ghostMode: gulp.cfg.server.ghostMode,
      logPrefix: '-server-',
      open: false,
    });

    gulp.start('watch');
  });
};
