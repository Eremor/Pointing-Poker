import { RuleSetRule } from 'webpack';

export const webpackSvgLoader = (): RuleSetRule => ({
  test: /\.svg$/,
  use: '@svgr/webpack'
});