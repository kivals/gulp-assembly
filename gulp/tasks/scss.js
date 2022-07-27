import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import gulpSass from 'gulp-sass';
import sass from 'sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css' // Сжатие CSS файла
import groupCssMediaQueries from 'gulp-group-css-media-queries' // Группировка медиа запросов
import webpCss from "gulp-webp";

const sassPlugin = gulpSass(sass);

const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SCSS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(sassPlugin({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 10 versions'],
      cascade: true
    }))
    .pipe(webpCss())
    .pipe(groupCssMediaQueries())
    .pipe(app.plugins.size({
      title: "style.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss({ level: 2 }))
    .pipe(app.plugins.size({
      title: "style.min.css"
    }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.isDev }))
    .pipe(app.plugins.browserSync.stream());
}

export {
  scss
}