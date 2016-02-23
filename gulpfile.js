var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var rucksack = require('gulp-rucksack');
var gutil = require('gulp-util');
var markdown = require('gulp-markdown-to-json');
var reload      = browserSync.reload;

var src = {
  scss: 'src/scss/**/*.scss',
  css:  './build/',
  indexHtml: 'src/*.html',
  md: 'src/**/*.md',
  mdDest: 'src/data'
};

// Static Server + watching scss/php files
gulp.task('serve', ['sass'], function() {

  browserSync({
    proxy: "localhost:8080",
    open: false,
    notify: false
  });

  gulp.watch(src.scss, ['sass']);
});

// Compile sass into CSS
gulp.task('sass', function() {
  return gulp.src(src.scss)
    .pipe(sass({outputStyle: 'expanded'})
    .on('error', function(err){
      browserSync.notify(err.message, 3000);
      this.emit('end');
    }))
    .pipe(rucksack({
      autoprefixer: true
    }))
    .pipe(gulp.dest(src.css))
    .pipe(reload({stream: true}));
});

gulp.task('copy-index-html', function() {
    gulp.src(src.indexHtml)
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./build'));
});

gulp.task('markdown', function() {
  gulp.src(src.md)
    .pipe(gutil.buffer())
    .pipe(markdown('data.json'))
    .pipe(gulp.dest(src.mdDest));
});

gulp.task('default', ['serve', 'copy-index-html', 'markdown']);
gulp.task('build', ['sass', 'copy-index-html']);
