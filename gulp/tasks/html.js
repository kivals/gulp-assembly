import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import webpHtml from 'gulp-webp-html';

const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'HTML',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(webpHtml())
    .pipe(fileInclude())
    .pipe(app.plugins.size({
      title: "До сжатия"
    }))
    .pipe(htmlmin({
        collapseWhitespace: true,
      }
    ))
    .pipe(app.plugins.size({
      title: "После сжатия"
    }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
}

export {
  html
}