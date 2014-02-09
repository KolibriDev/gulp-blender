var gulp    = require('gulp'),
    bump    = require('gulp-bump');

module.exports = {
  'bump-patch': {
    callback: function() {
      gulp.src(['README.md'])
        .pipe(bump({type:'patch'}))
        .pipe(gulp.dest('./'));
    }
  },
  'bump-minor': {
    callback: function() {
      gulp.src(['README.md'])
        .pipe(bump({type:'minor'}))
        .pipe(gulp.dest('./'));
    }
  },
  'bump-major': {
    callback: function() {
      gulp.src(['README.md'])
        .pipe(bump({type:'major'}))
        .pipe(gulp.dest('./'));
    }
  },
  // Shorthand for bump-patch
  'bump': { deps: ['bump-patch'] }
};
