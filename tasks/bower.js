
module.exports = function(gulp) {

  gulp.task('bower', function() {
    var mainBowerFiles = require('main-bower-files');

    var jsFilter = gulp.plugin.filter(['**/*.js','**/*.map']),
        imgFilter = gulp.plugin.filter('**/*.{png,gif,jpg,jpeg,svg}'),
        cssFilter = gulp.plugin.filter('**/*.css'),
        scssFilter = gulp.plugin.filter('**/*.scss');

    return gulp.src(mainBowerFiles())
      .pipe( jsFilter )
      .pipe( gulp.dest('./src/js/vendor/') )
      .pipe( jsFilter.restore() )

      .pipe( imgFilter )
      .pipe( gulp.dest('./src/img/vendor/') )
      .pipe( imgFilter.restore() )

      .pipe( cssFilter )
      .pipe( gulp.plugin.rename({extname: '.scss'}) )
      .pipe( cssFilter.restore() )

      .pipe( scssFilter )
      .pipe( gulp.dest('./src/scss/vendor/') );
  });
};
