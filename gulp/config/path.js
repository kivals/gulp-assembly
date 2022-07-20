const pathSrc = './src';
const pathBuild = './build'

export default {
  src: {
    html: `${pathSrc}/html/*.html`,
    files: `${pathSrc}/files/**/*.*`,
    scss: `${pathSrc}/scss/style.scss`,
    js: `${pathSrc}/js/app.js`,
  },

  build: {
    html: `${pathBuild}/`,
    files: `${pathBuild}/files/`,
    css: `${pathBuild}/css/`,
    js: `${pathBuild}/js/`,
  },

  watch: {
    html: `${pathSrc}/**/*.html`,
    files: `${pathSrc}/files/**/*.*`,
    scss: `${pathSrc}/scss/**/*.scss`,
    js: `${pathSrc}/js/**/*.js`,
  },

  clean: pathBuild,
}