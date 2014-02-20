
module.exports = function(gulp) {

  gulp.task('bump-patch', function() {
    gulp.src('./*.json')
      .pipe(gulp.plugin.bump({type:'patch'}))
      .pipe(gulp.dest('./'));
  });

  gulp.task('bump-minor', function() {
    gulp.src('./*.json')
      .pipe(gulp.plugin.bump({type:'minor'}))
      .pipe(gulp.dest('./'));
  });

  gulp.task('bump-major', function() {
    gulp.src('./*.json')
      .pipe(gulp.plugin.bump({type:'major'}))
      .pipe(gulp.dest('./'));
  });

  gulp.task('bump', ['bump-patch']);

};
