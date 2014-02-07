var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    sass        = require('gulp-sass'),
    csso        = require('gulp-csso'),
    uglify      = require('gulp-uglify'),
    jade        = require('gulp-jade'),
    concat      = require('gulp-concat'),
    livereload  = require('gulp-livereload'), // Livereload plugin needed: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
    tinylr      = require('tiny-lr'),
    express     = require('express'),
    app         = express(),
    path        = require('path'),
    server      = tinylr(),
    clean       = require('gulp-clean');


// --- Basic Tasks ---
gulp.task('css', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(
      sass({
      includePaths: ['src/scss'],
      errLogToConsole: true
    })
    )
    .pipe( csso() )
    .pipe( gulp.dest('dev/css/') )
    .pipe( livereload( server ));
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe( uglify() )
    .pipe( concat('all.min.js'))
    .pipe( gulp.dest('dev/js/'))
    .pipe( livereload( server ));
});

gulp.task('templates', function() {
  return gulp.src('src/views/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dev/'))
    .pipe( livereload( server ));
});

gulp.task('express', function() {
  app.use(express.static(path.resolve('./dev')));
  app.listen(1337);
  gutil.log('Listening on port: 1337');
});

gulp.task('clean', function() {
  gulp.src('dev', {read: false})
    .pipe(clean());
});

gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err);
    }

    gulp.watch('src/scss/*.scss',['css']);

    gulp.watch('src/js/*.js',['js']);

    gulp.watch('src/views/*.jade',['templates']);

  });
});

// Default Task
gulp.task('default', ['clean','js','css','templates','express','watch']);