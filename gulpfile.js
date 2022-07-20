import gulp from 'gulp';
import path from './gulp/config/path.js';
import plugins from "./gulp/config/plugins.js";

global.app = {
  path,
  gulp,
  plugins
};

import { copy } from "./gulp/tasks/copy.js";
import { clean } from "./gulp/tasks/clean.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";

const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
}

const mainTasks = gulp.parallel(copy, html, scss, js);

const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));

export {
  clean,
  html,
  scss,
  js
}

gulp.task('default', dev);