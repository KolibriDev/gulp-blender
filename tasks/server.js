'use strict';

module.exports = function(gulp) {
  var modRewrite = require('connect-modrewrite');
  var url = require('url');
  var proxy = require('proxy-middleware');

  gulp.task('serve', ['rebuild'], function() {

    var middleware = [];

    if (gulp.cfg.api) {
      gulp.start('serve-api');
      // Create proxy for /api to running api
      var proxyOptions = url.parse('http://localhost:' + gulp.cfg.api.port + '/api');
          proxyOptions.route = '/api';
      middleware.push(proxy(proxyOptions));
    }

    // Create rewriteRules for connect middleware
    var rewriteRules = [];
    // Redirects all paths that don't match to index.html
    // rewriteRules.push('!\\.html|\\.js|\\.svg|\\.css|\\.ico|\\.png|\\.jpg$ /index.html [L]');

    middleware.push(modRewrite(rewriteRules));

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
      middleware: middleware
    });

    gulp.start('watch');
  });

  // Keep supporting gulp server
  gulp.task('server', ['serve']);
};
