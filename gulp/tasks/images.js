import imagemin from 'gulp-imagemin';

const images = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'IMAGES',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(imagemin())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browserSync.stream());
}

export { images }