
module.exports = function(gulp) {

  gulp.task('connect', gulp.plugin.connect.server({
    root: './dev',
    port: 1337,
    livereload: true,
    open: {
      file: 'index.html',
      browser: 'Google Chrome'
    }
  }));

};
