
module.exports = function(gulp) {
  var prod = gulp.plugin.util.env.prod;

  gulp.task('connect', function() {
    return gulp.plugin.connect.server({
      root: [(prod ? './dist' : './dev')],
      port: 1337,
      livereload: true
    });
  });

};
