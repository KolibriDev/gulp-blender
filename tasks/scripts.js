
module.exports = function(gulp) {

  gulp.task('scripts-lint', function() {
    return gulp.src('src/js/**/*.js')
    .pipe( gulp.plugin.cached('scripts-lint') )
    .pipe( gulp.plugin.jshint('./.jshintrc') )
    .pipe( gulp.plugin.jshint.reporter('default') )
    // TODO: Figure out a way to stop this task on jshint failure,
    //        without stopping the whole 'watch' task
    // .pipe( gulp.plugin.jshint.reporter('fail') )
    // .on('error', gulp.plugin.notify.onError(function(error) {
    //   return 'jshint failed ' + error.message;
    // }))
    ;
  });

  gulp.task('scripts-dev', ['scripts-lint'], function() {
    return gulp.src('src/js/**/*.js')
    .pipe( gulp.plugin.cached('scripts-dev') )
    .pipe( gulp.dest('dev/js/') )
    .pipe( gulp.plugin.connect.reload() );
  });

  gulp.task('scripts-dist', ['scripts-lint'], function() {
    return gulp.src('src/js/**/*.js')
    .pipe( gulp.plugin.uglify() )
    .pipe( gulp.dest('dist/js/') );
  });

  gulp.task('scripts', ['scripts-dev','scripts-dist']);

};
