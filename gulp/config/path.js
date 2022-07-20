const pathSrc = './src';
const pathBuild = './build'

export default {
  src: {
    html: `${pathSrc}/html/*.html`,
    files: `${pathSrc}/files/**/*.*`,
    scss: `${pathSrc}/scss/style.scss`,
    js: `${pathSrc}/js/app.js`,
    images: `${pathSrc}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${pathSrc}/img/**/*.{svg}`,
  },

  build: {
    html: `${pathBuild}/`,
    files: `${pathBuild}/files/`,
    css: `${pathBuild}/css/`,
    js: `${pathBuild}/js/`,
    images: `${pathBuild}/img/`,
  },

  watch: {
    html: `${pathSrc}/**/*.html`,
    files: `${pathSrc}/files/**/*.*`,
    scss: `${pathSrc}/scss/**/*.scss`,
    js: `${pathSrc}/js/**/*.js`,
    images: `${pathSrc}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
  },

  clean: pathBuild,
}