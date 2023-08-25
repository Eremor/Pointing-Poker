import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { webpackSvgLoader } from './loaders/webpackSvgLoader';
import { webpackScssLoader } from './loaders/webpackScssLoader';

export const webpackLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = webpackSvgLoader();
  const sassLoader = webpackScssLoader(isDev);

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: {
      loader: 'file-loader',
    },
  };

  return [typescriptLoader, svgLoader, sassLoader, fileLoader];
};
