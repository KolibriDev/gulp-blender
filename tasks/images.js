'use strict';

module.exports = function(gulp) {
  gulp.task('images', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod,
        imgFilter = gulp.plugin.filter(gulp.cfg.images.imgFilter),
        svgFilter = gulp.plugin.filter(gulp.cfg.images.svgFilter),
        imgDevDir = gulp.cfg.env.development.dir
                   + gulp.cfg.images.subDir,
        imgProdDir = gulp.cfg.env.production.dir
                   + gulp.cfg.images.subDir;

    return gulp.src(gulp.cfg.images.src)
      .pipe( gulp.plugin.plumber() )
      .pipe( prod ? gutil.noop() : gulp.plugin.changed(imgDevDir) )

      .pipe( imgFilter )
      .pipe( !prod ? gutil.noop() : gulp.plugin.imagemin() )
      .on('error', gulp.plugin.notify.onError(function(error){
        return error.message.split('\n').pop();
      }))
      .pipe( imgFilter.restore() )

      .pipe( svgFilter )
      .pipe( !prod ? gutil.noop() : gulp.plugin.svgmin() )
      .on('error', gulp.plugin.notify.onError(function(error){
        return error.message.split('\n').pop();
      }))
      .pipe( svgFilter.restore() )

      .pipe( gulp.dest(prod ? imgProdDir : imgDevDir) )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });
};
