import { Configuration } from 'webpack';
import { webpackDevServer } from './webpackDevServer';
import { webpackLoaders } from './webpackLoaders';
import { webpackResolvers } from './webpackResolvers';

import { BuildOptions } from "./types/config";
import { webpackPlugins } from './webpackPlugins';

export const webpackBuildConfig = (options: BuildOptions): Configuration => {

  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    module: {
      rules: webpackLoaders(options)
    },
    resolve: webpackResolvers(options),
    plugins: webpackPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? webpackDevServer(options) : undefined
  }
}