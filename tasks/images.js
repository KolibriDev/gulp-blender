'use strict';

module.exports = function(gulp) {
  gulp.task('images', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod,
        imgFilter = gulp.plugin.filter(gulp.cfg.images.imgFilter),
        imgDir = gulp.cfg.env.dir + gulp.cfg.images.subDir;

    return gulp.src(gulp.cfg.images.src)
      .pipe( gulp.plugin.plumber() )
      .pipe( prod ? gutil.noop() : gulp.plugin.changed(imgDir) )

      .pipe( imgFilter )
      .pipe( !prod ? gutil.noop() : gulp.plugin.imagemin() )
      .on('error', gulp.plugin.notify.onError(function(error){
        return error.message.split('\n').pop();
      }))
      .pipe( imgFilter.restore() )

      .pipe( gulp.dest(imgDir) )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });
};
