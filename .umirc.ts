import { version } from './package.json';
import { defineConfig } from 'dumi';

export default defineConfig({
  title: `Faz-UI @${version}`,
  favicon: 'https://faz-images.oss-cn-hangzhou.aliyuncs.com/favicon.png',
  logo: 'https://faz-images.oss-cn-hangzhou.aliyuncs.com/faz-ui.png',
  outputPath: 'docs-dist',
  description: '一套基于 React 的 UI 组件库',
  dynamicImport: {
    loading: '@/Loading',
  },
  exportStatic: {},
  publicPath: 'https://faz-source.oss-cn-hangzhou.aliyuncs.com/docs-dist/'
});
