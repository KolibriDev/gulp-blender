
module.exports = function(gulp) {

  gulp.task('bower', function() {
    var bower = require('bower');

    return bower.commands.install()
      .on('end', function() {

        var jsFilter = gulp.plugin.filter(['**/*.js','**/*.map']),
            scssFilter = gulp.plugin.filter('**/*.scss');

        return gulp.plugin.bowerFiles()
          .pipe( gulp.plugin.rename({dirname: ''}) )

          .pipe( jsFilter )
          .pipe( gulp.dest('./src/js/vendor/') )

          .pipe( jsFilter.restore() )

          .pipe( scssFilter )
          .pipe( gulp.dest('./src/scss/vendor/') );
      });

  });

};
