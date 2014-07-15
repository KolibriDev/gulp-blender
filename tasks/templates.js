'use strict';

module.exports = function(gulp) {
  gulp.task('templates', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod,
        data = {
          'env': prod ? 'production' : 'development',
          'flags': gutil.env
        };

    return gulp.src(gulp.cfg.templates.src)
      .pipe( gulp.plugin.plumber() )
      .pipe( gulp.plugin.jade({pretty: !prod, data: data}) )
      .on('error', gulp.plugin.notify.onError(function(error){
        return error.message.split('\n').pop();
      }))
      .pipe(
        gulp.dest( prod ?
          gulp.cfg.env.production.dir : gulp.cfg.env.development.dir)
        )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });
};
