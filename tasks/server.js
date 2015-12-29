'use strict';

module.exports = function(gulp) {
  var modRewrite = require('connect-modrewrite');

  gulp.task('serve', ['build'], function() {

    // Create rewriteRules for middleware
    var rewriteRules = [];
    // Redirects all paths that don't match to index.html
    // rewriteRules.push('!\\.html|\\.js|\\.svg|\\.css|\\.ico|\\.png|\\.jpg$ /index.html [L]');

    gulp.cfg.server.server.baseDir = gulp.cfg.dest;
    gulp.cfg.server.middleware.push(modRewrite(rewriteRules));

    // http://www.browsersync.io/docs/options/
    gulp.plugin.browserSync.init(gulp.cfg.server);

    gulp.start('watch');
  });

  gulp.task('server', ['serve']);
};
