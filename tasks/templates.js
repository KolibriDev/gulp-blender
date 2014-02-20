
module.exports = function(gulp) {

  gulp.task('templates-dev', function() {
    return gulp.src('src/views/*.jade')
      .pipe( gulp.plugin.cached('templates-dev') )
      .pipe( gulp.plugin.jade({pretty: true}) )
      .pipe( gulp.dest('dev/') )
      .pipe( gulp.plugin.connect.reload() );
  });

  gulp.task('templates-dist', function() {
    return gulp.src('src/views/*.jade')
      .pipe( gulp.plugin.jade({pretty: false}) )
      .pipe( gulp.dest('dist/') );
  });

  // Run all templates tasks
  gulp.task('templates', ['templates-dev', 'templates-dist']);

};
