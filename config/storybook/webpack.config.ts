import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../webpack/types/config';
import { webpackSvgLoader } from '../webpack/loaders/webpackSvgLoader';
import { webpackScssLoader } from '../webpack/loaders/webpackScssLoader';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  config.module!.rules = config.module?.rules?.map((rule) => {
    const r = rule as RuleSetRule;
    if (/svg/.test(r.test as string)) {
      return { ...r, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules?.push(webpackSvgLoader());
  config.module?.rules?.push(webpackScssLoader(true));

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
    })
  );

  return config;
};
