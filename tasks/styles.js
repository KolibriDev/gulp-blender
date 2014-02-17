var gulp    = require('gulp'),
    sass    = require('gulp-ruby-sass'),
    prefix  = require('gulp-autoprefixer');

module.exports = {
  'styles-dev': {
    callback: function() {
      var connect = require('gulp-connect');
      return gulp.src('src/scss/*.scss')
        .pipe( sass({noCache:true}) )
        .pipe( prefix('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1') )
        .pipe( gulp.dest('dev/css/') )
        .pipe( connect.reload() );
    }
  },
  'styles-dist': {
    callback: function() {
      var csso = require('gulp-csso');
      return gulp.src('src/scss/*.scss')
        .pipe( sass({noCache:true}) )
        .pipe( prefix('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1') )
        .pipe( csso() )
        .pipe( gulp.dest('dist/css/') );
    }
  },
  // Run all styles tasks
  'styles': {
    deps: ['styles-dev', 'styles-dist']
  }
};
