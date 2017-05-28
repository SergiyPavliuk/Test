var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    imagemin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync'),
    image = require('gulp-image');

gulp.task('image', function () {
    gulp.src('assets/img/*')
        .pipe(image())
        .pipe(gulp.dest('assets/img'));
});


gulp.task('img', function () {
    gulp.src('assets/img/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 8,
            svgoPlugins: [{
                removeViewBox: true
            }]
        }))
        .pipe(gulp.dest('assets/img'))
});
gulp.task('buildcss', function () {
    return gulp.src('assets/less/style.less')
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer(
	              ['last 3 versions', 'ie 10']
        ))
        .pipe(plugins.csso())
        .pipe(plugins.rename('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));

});
gulp.task('browser-sync', function () {
    browserSync({
        server: true
    });
});

gulp.task('watch', ['buildcss', 'browser-sync'], function () {
    //Watch .less files
    gulp.watch(['assets/less/**/*.less'], ['buildcss']);
    //Watch img
    gulp.watch(['assets/img/*'], ['img']);
    //watch html
    gulp.watch(['index.html']);
});

gulp.task('default', ['buildcss', 'watch', 'browser-sync']);
