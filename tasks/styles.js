
module.exports = function(gulp) {

  gulp.task('styles-dev', function() {
    return gulp.src('src/scss/*.scss')
    .pipe( gulp.plugin.rubySass({noCache:true}) )
    .pipe(
       gulp.plugin.autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1')
     )
    .pipe( gulp.dest('dev/css/') )
    .pipe( gulp.plugin.connect.reload() );
  });

  gulp.task('styles-dist', function() {
    return gulp.src('src/scss/*.scss')
    .pipe( gulp.plugin.rubySass({noCache:true}) )
    .pipe(
       gulp.plugin.autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1')
     )
    .pipe( gulp.plugin.csso() )
    .pipe( gulp.dest('dist/css/') );
  });

  // Run all styles tasks
  gulp.task('styles', ['styles-dev', 'styles-dist']);

};
