
module.exports = function(gulp) {
  var runningServer = false;

  gulp.task('server', ['build-dev'], function() {
    runningServer = true;
    gulp.start('connect','watch');
  }).on('stop',function(e){
    // TODO: Find more elegant solution
    if (!runningServer) { return; }
    runningServer = false;
    require('open')('http://localhost:1337');
  });

};
