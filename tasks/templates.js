
module.exports = function(gulp) {

  gulp.task('templates', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod;

    return gulp.src('./src/views/*.jade')
      .pipe( gulp.plugin.plumber() )
      .pipe( gulp.plugin.jade({pretty: !prod}) )
      .on('error', gulp.plugin.notify.onError(function(error){
        return error.message.split('\n').pop();
      }))
      .pipe( gulp.dest(prod ? './dist/' : './dev/') )
      .pipe( !prod ? gutil.noop() : gulp.plugin.size() )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });

};
