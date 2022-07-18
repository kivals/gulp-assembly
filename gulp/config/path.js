const pathSrc = './src';
const pathBuild = './build'

export default {
  src: {
    html: `${pathSrc}/html/*.html`,
    files: `${pathSrc}/files/**/*.*`
  },

  build: {
    html: `${pathBuild}/`,
    files: `${pathBuild}/files/`
  },

  watch: {
    html: `${pathSrc}/**/*.html`,
    files: `${pathSrc}/files/**/*.*`
  },

  clean: pathBuild,
}