var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');
 
gulp.task('build', function() {
  var b = browserify({
    entries: './index.jsx',
    extensions: ['.jsx'],
    debug: true,
    transform: [babelify]
  });

 return b.bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);

gulp.task('webserver', function() {
  gulp.src('./dist/')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      path: './dist/',
      open: true
    }));
});
