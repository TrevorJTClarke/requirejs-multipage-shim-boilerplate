var gulp = require('gulp'),
  requirejs = require('requirejs'),
  options = require('./options');

gulp.task('requirejs', function(taskReady) {
  requirejs.optimize(options, function() {
    taskReady();
  }, function(error) {
    console.error('requirejs task failed', JSON.stringify(error))
    process.exit(1);
  });
});

// basic command setup
gulp.task('default', [
  'requirejs'
]);
