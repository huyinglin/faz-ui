export default {
  // entry: '/src/index.ts',
  // file: 'index',
  esm: 'rollup',
  cjs: 'rollup',
  // umd: {
  //   name: 'faz-ui',
  //   globals: {
  //     react: 'React', // 这跟external 是配套使用的，指明global.React即是外部依赖react
  //   },
  // },
  // extraBabelPlugins: [
  //   ['import', {
  //     libraryName: 'faz-ui',
  //     libraryDirectory: 'es',
  //   }],
  // ],
  runtimeHelpers: true,
  disableTypeCheck: true,
};
