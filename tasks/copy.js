var gulp = require('gulp');

module.exports = {
  'copy-dev': {
    callback: function() {
      gulp.src('src/img/**/*.ico')
        .pipe( gulp.dest('dev/img/') );
      gulp.src('src/fonts/**')
        .pipe( gulp.dest('dev/fonts/') );
    }
  },
  'copy-dist': {
    callback: function() {
      gulp.src('src/img/**/*.ico')
        .pipe( gulp.dest('dev/img/') );
      gulp.src('src/fonts/**')
        .pipe( gulp.dest('dev/fonts/') );
    }
  },
  // Run all copy tasks
  'copy': {
    deps: ['copy-dev', 'copy-dist']
  }
};
