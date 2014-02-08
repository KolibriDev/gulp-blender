
var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')();

gulp.task('connect', plugins.connect.server({
  root: __dirname + '/dev',
  port: 1337,
  livereload: true,
  open: {
    file: 'index.html',
    browser: 'Google Chrome'
  }
}));

gulp.task('css', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(
      plugins.sass({
      includePaths: ['src/scss'],
      errLogToConsole: true
    })
    )
    .pipe( plugins.csso() )
    .pipe( gulp.dest('dev/css/') )
    .pipe( plugins.connect.reload() );
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe( plugins.uglify() )
    .pipe( gulp.dest('dev/js/') )
    .pipe( plugins.connect.reload() );
});

gulp.task('templates', function() {
  return gulp.src('src/views/*.jade')
    .pipe(plugins.jade({
      pretty: true
    }))
    .pipe(gulp.dest('dev/'))
    .pipe( plugins.connect.reload() );
});

// TODO: Find a way to implement clean back into 'default' task;
//       throwing errors like crazy atm!
gulp.task('clean', function() {
  gulp.src(['dev'], {read: false})
    .pipe( plugins.clean() );
});

gulp.task('watch', function () {
  gulp.watch('src/scss/*.scss',['css']);
  gulp.watch('src/js/*.js',['js']);
  gulp.watch('src/views/*.jade',['templates']);
});

// Default Task
gulp.task('default', ['js', 'css', 'templates', 'connect', 'watch']);
