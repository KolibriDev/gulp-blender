'use strict';

module.exports = function(gulp) {
  var modRewrite = require('connect-modrewrite');

  gulp.task('serve', ['rebuild'], function() {

    // Create rewriteRules for connect middleware
    var rewriteRules = [];
    // Redirects all paths that don't match to index.html
    // rewriteRules.push('!\\.html|\\.js|\\.svg|\\.css|\\.ico|\\.png|\\.jpg$ /index.html [L]');

    // http://www.browsersync.io/docs/options/
    gulp.plugin.browserSync.init({
      port: gulp.cfg.server.port,
      server: {
        baseDir: gulp.cfg.envdir,
      },
      ui: {
        port: gulp.cfg.server.uiport,
      },
      ghostMode: gulp.cfg.server.ghostMode,
      logLevel: 'info',
      logFileChanges: true,
      logConnections: true,
      logPrefix: '-server-',
      open: false,
      reloadDelay: 500,
      notify: false,
      middleware: [
        modRewrite(rewriteRules)
      ]
    });

    gulp.start('watch');
  });

  // Keep supporting gulp server
  gulp.task('server', ['serve']);
};
