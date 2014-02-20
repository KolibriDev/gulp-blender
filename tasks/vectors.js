
module.exports = function(gulp) {

  gulp.task('vectors-dev', function() {
    return gulp.src('src/img/**/*.svg')
      .pipe( gulp.plugin.cached('vectors-dev') )
      .pipe( gulp.dest('dev/img/') );
  });

  gulp.task('vectors-dist', function() {
    return gulp.src('src/img/**/*.svg')
      .pipe( gulp.plugin.svgmin() )
      .pipe( gulp.dest('dist/img/') );
  });

  // Run all vectors tasks
  gulp.task('vectors', ['vectors-dev', 'vectors-dist']);

};
