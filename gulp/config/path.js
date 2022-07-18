const pathSrc = './src';
const pathBuild = './build'

export default {
  src: {
    html: `${pathSrc}/html/*.html`,
    files: `${pathSrc}/files/**/*.*`,
    scss: `${pathSrc}/scss/style.scss`,
  },

  build: {
    html: `${pathBuild}/`,
    files: `${pathBuild}/files/`,
    css: `${pathBuild}/css/`,
  },

  watch: {
    html: `${pathSrc}/**/*.html`,
    files: `${pathSrc}/files/**/*.*`,
    scss: `${pathSrc}/scss/**/*.scss`,
  },

  clean: pathBuild,
}