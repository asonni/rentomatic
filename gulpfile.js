'use strict';
var gulp = require('gulp');
var req = require('gulp-load-plugins')();
// var jshint = require('gulp-jshint');

function errorLog(error){
  console.error.bind(error);
  this.emit('end');
}

var paths = {
  styles: ['./assets/**/*.css'],
  html: ['./views/index.html','!./views/index-min.html'],
  scripts: ['./assets/**/*.js'],
  backEndScripts: ['./routes/**/*.js','app.js']
};

gulp.task('default',['html','styles','scripts','start','watch']);

gulp.task('start',function(){
  req.nodemon({
    script: './bin/www',
    ext: 'html js',
    watch: ['bin/*','routes/*','app.js']
  }).on('restart',function(){
    console.log('The server has been restarted!');
  });
});
 
gulp.task('html',function(){
  gulp.src(paths.html)
  .on('error',errorLog)
  .pipe(req.rename({suffix:'-min'}))
  .pipe(req.htmlhint())
  .pipe(req.htmlhint.reporter("htmlhint-stylish"))
  // .pipe(req.htmlhint.failReporter({suppress:true})) // if you want to your task to fail on error(s)
  .pipe(req.htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./views/'));
});

gulp.task('styles',function(){
  gulp.src(paths.styles)
  .pipe(req.rename({suffix:'.min'}))
  .pipe(req.cleanCss())
  .pipe(req.plumber())
  .pipe(req.autoprefixer('last 2 versions'))
  .pipe(gulp.dest('./public/'));
});

gulp.task('scripts',function(){
  gulp.src(paths.scripts)
  .pipe(req.jshint())
  .pipe(req.jshint.reporter('jshint-stylish',{beep:true}))
  .pipe(req.jshint.reporter('fail'))
  .on('error',function(){this.emit('end');})
  .pipe(req.rename({suffix:'.min'}))
  .pipe(req.uglify())
  .pipe(gulp.dest('./public/'));
});

gulp.task('backEndScripts',function(){
  gulp.src(paths.backEndScripts)
  .pipe(req.jshint())
  .pipe(req.jshint.reporter('jshint-stylish',{beep:true}))
  .pipe(req.jshint.reporter('fail'))
  .on('error',function(){
    this.emit('end');
  });
});

gulp.task('watch',function(){
  gulp.watch(paths.backEndScripts,['backEndScripts']);
  gulp.watch(paths.html,['html']);
  gulp.watch(paths.styles,['styles']);
  gulp.watch(paths.scripts,['scripts']);
});