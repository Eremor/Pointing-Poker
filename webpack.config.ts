import { resolve } from 'path';
import { Configuration } from 'webpack';
import { BuildEnv, BuildMode, BuildPaths } from './config/webpack/types/config';
import { webpackBuildConfig } from './config/webpack/webpackBuildConfig';

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    build: resolve(__dirname, 'build'),
    html: resolve(__dirname, 'public', 'index.html'),
    src: resolve(__dirname, 'src'),
  };

  const mode: BuildMode = env.mode || 'development';
  const port: number = env.port || 3000;

  const isDev: boolean = mode === 'development';

  const config: Configuration = webpackBuildConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
