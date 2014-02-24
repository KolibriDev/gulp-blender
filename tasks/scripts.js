
module.exports = function(gulp) {

  gulp.task('scripts', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod,
        lintFilter = gulp.plugin.filter(['!**/vendor/**/*']),
        jsFilter = gulp.plugin.filter(['**/*.js']);

    return gulp.src(['./src/js/**/*.js','./src/js/**/*.map'])
      .pipe( prod ? gutil.noop() : gulp.plugin.changed('./dev/js/') )
      .pipe( !prod ? gutil.noop() : jsFilter )

      .pipe( lintFilter )
      .pipe( gulp.plugin.jshint('./.jshintrc') )
      .pipe( gulp.plugin.jshint.reporter('default') )
      // TODO: Figure out a way to stop this task on jshint failure,
      //        without stopping the whole 'watch' task
      // .pipe( gulp.plugin.jshint.reporter('fail') )
      // .on('error', gulp.plugin.notify.onError(function(error) {
      //   return 'jshint failed ' + error.message;
      // }))
      .pipe( lintFilter.restore() )

      .pipe(
        !prod ? gutil.noop() : gulp.plugin.uglify({preserveComments: 'some'})
       )
      .pipe( gulp.dest(prod ? './dist/js/' : './dev/js/') )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });

};
