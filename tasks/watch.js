'use strict';

module.exports = function(gulp) {
  gulp.task('watch', ['server'], function() {
    gulp.watch(gulp.cfg.styles.watchSrc,['styles']);
    gulp.watch([gulp.cfg.scripts.src,gulp.cfg.scripts.vendor.src],['scripts']);
    gulp.watch([gulp.cfg.templates.watchSrc,gulp.cfg.svg.src],['templates']);
    gulp.watch([gulp.cfg.ico.src,gulp.cfg.svg.src,gulp.cfg.fonts.src,gulp.cfg.videos.src],['copy']);
    gulp.watch(gulp.cfg.images.src,['images']);
  });
};
