
module.exports = function(gulp) {

  gulp.task('watch', ['connect'], function() {
    gulp.watch('./src/scss/**/*.scss',['styles']);
    gulp.watch('./src/js/**/*.{js,map}',['scripts']);
    gulp.watch('./src/views/**/*.jade',['templates']);
    gulp.watch(['./src/img/**/*.ico','./src/fonts/**/*','./src/videos/**/*'],['copy']);
    gulp.watch('./src/img/**/*.{png,gif,jpg,jpeg,svg}',['images']);
  });

};
