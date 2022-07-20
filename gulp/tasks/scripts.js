import webpack from "webpack-stream";
import babel from "gulp-babel";

const scripts = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'JS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(webpack({
      mode: 'production',
      output: { filename: 'app.min.js' }
    }))

    .pipe(app.gulp.dest(app.path.build.js, { sourcemaps: true }))
    .pipe(app.plugins.browserSync.stream());
}

export {
  scripts
}