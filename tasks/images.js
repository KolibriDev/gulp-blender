
module.exports = function(gulp) {

  gulp.task('images-dev', function() {
    return gulp.src('src/img/**/*.{png,gif,jpg,jpeg}')
      .pipe( gulp.plugin.cached('images-dev') )
      .pipe( gulp.dest('dev/') );
  });

  gulp.task('images-dist', function() {
    return gulp.src('src/img/**/*.{png,gif,jpg,jpeg}')
      .pipe( gulp.plugin.imagemin() )
      .pipe( gulp.dest('dist/') );
  });

  // Run all images tasks
  gulp.task('images', ['images-dev', 'images-dist']);

};
