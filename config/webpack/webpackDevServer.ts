import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from "./types/config";

export const webpackDevServer = (options: BuildOptions): DevServerConfiguration => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  hot: true
})