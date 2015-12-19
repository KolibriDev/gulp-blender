'use strict';

module.exports = function(gulp) {
  var modRewrite = require('connect-modrewrite');

  gulp.task('serve', ['build'], function() {

    // Create rewriteRules for middleware
    var rewriteRules = [];
    // Redirects all paths that don't match to 404.html
    // rewriteRules.push('!\\.html|\\.js|\\.svg|\\.css|\\.ico|\\.png|\\.jpg$ /404.html [L]');

    gulp.cfg.server.server.baseDir = gulp.cfg.envdir;
    gulp.cfg.server.middleware.push(modRewrite(rewriteRules));

    console.log(gulp.cfg.server);

    // http://www.browsersync.io/docs/options/
    gulp.plugin.browserSync.init(gulp.cfg.server);

    gulp.start('watch');
  });

  gulp.task('server', ['serve']);
};
