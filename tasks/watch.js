'use strict';

module.exports = function(gulp) {
  gulp.task('watch', ['connect'], function() {
    gulp.watch(gulp.cfg.styles.watchSrc,['styles']);
    gulp.watch(gulp.cfg.scripts.src,['scripts']);
    gulp.watch(gulp.cfg.templates.watchSrc,['templates']);
    gulp.watch([gulp.cfg.ico.src,gulp.cfg.fonts.src,gulp.cfg.videos.src],['copy']);
    gulp.watch(gulp.cfg.images.src,['images']);
  });
};
