const gulp = require('gulp');
const browserSync = require('browser-sync').create('bsServer');

// start develop server and watchers
gulp.task('server', () => {

    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch(["dist/js/scripts.js", "dist/templates/*.html", "dist/css/style.css"]).on('change', browserSync.reload);
});