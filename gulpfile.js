var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
    browserSync.init({
        proxy: "http://localhost/phaser-game"
    });
    gulp.watch("./js/*.js").on("change", browserSync.reload);
});