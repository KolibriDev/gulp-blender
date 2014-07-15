'use strict';

module.exports = function(gulp) {

  gulp.task('copy', function() {
    var path = gulp.plugin.util.env.prod ?
      gulp.cfg.env.production.dir : gulp.cfg.env.development.dir;

    gulp.src(gulp.cfg.ico.src)
      .pipe( gulp.dest(path + gulp.cfg.ico.subDir) );

    gulp.src(gulp.cfg.fonts.src)
      .pipe( gulp.dest(path + gulp.cfg.fonts.subDir) );

    gulp.src(gulp.cfg.videos.src)
      .pipe( gulp.dest(path + gulp.cfg.videos.subDir) );
  });
};
