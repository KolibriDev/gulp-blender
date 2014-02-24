
module.exports = function(gulp) {
  var prod = gulp.plugin.util.env.prod;

  gulp.task('connect', gulp.plugin.connect.server({
    root: [(prod ? './dist' : './dev')],
    port: (prod ? 8000 : 1337),
    livereload: true,
    open: {
      browser: 'Google Chrome'
    }
  }));

};
