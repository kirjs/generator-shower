'use strict';
// generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>

var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

gulp.task('connect', function () {
  var connect = require('connect');
  var app = connect()
    .use(require('connect-livereload')({ port: 35729 }))
    .use(connect.static('presentation'));
    // paths to bower_components should be relative to the current file
    // e.g. in app/index.html you should use ../bower_components
    // .use('/bower_components', connect.static('bower_components'))
    // .use(connect.directory('app'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});

gulp.task('serve', ['connect'], function () {
  require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {
  var server = $.livereload();

  // watch for changes
  gulp.watch([
    'presentation/*.html',
    'presentation/**/*.css',
    'presentation/**/*.js',
    'presentation/**/*'
  ]).on('change', function (file) {
    server.changed(file.path);
  });
});
