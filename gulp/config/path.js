const pathSrc = './src';
const pathBuild = './build'

export default {
  root: pathBuild,
  src: {
    html: `${pathSrc}/html/*.html`,
    files: `${pathSrc}/files/**/*.*`
  },

  build: {
    html: `${pathBuild}/files/**/*.*`,
    files: `${pathBuild}/files/**/*.*`
  },
}