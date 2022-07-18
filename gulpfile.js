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

const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

const dev = gulp.series(clean, mainTasks, watcher);

export {
  clean,
  html,
}

gulp.task('default', dev);