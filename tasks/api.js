'use strict';

module.exports = function(gulp) {

  gulp.task('serve-api', function() {
    var server = gulp.plugin.liveServer(gulp.cfg.api.server, {env: {PORT: gulp.cfg.api.port}}, false);
    server.start();
    gulp.plugin.util.log('API server started on port ' + gulp.cfg.api.port);

    gulp.watch([gulp.cfg.api.src], function(file) {
      server.start.apply(server);
      server.notify.apply(server, [file]);
      gulp.plugin.util.log('Restarted API on port ' + gulp.cfg.api.port);
    });
  });

  var path = require('path');
  var dir = path.join(gulp.cfg.envdir, gulp.cfg.api.subDir);
  var jsFilter = gulp.plugin.filter(gulp.cfg.scripts.jsFilter, {restore: true});

  gulp.task('build-api', ['jshint-api'], function() {
    return gulp.src(gulp.cfg.api.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( gulp.plugin.debug({title:'--build-api:'}) )

      .pipe ( jsFilter )
      .pipe ( gulp.plugin.sourcemaps.init() )
      .pipe ( gulp.plugin.babel(gulp.cfg.scripts.config) )
      .pipe ( gulp.plugin.sourcemaps.write())
      .pipe ( jsFilter.restore )

      .pipe ( gulp.dest(dir) )

      .pipe ( gulp.plugin.browserSync.stream() );
  });
};
