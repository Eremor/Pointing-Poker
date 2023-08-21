import { resolve } from 'path';
import { ProgressPlugin, Configuration } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  entry: resolve(__dirname, 'src', 'index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'build'),
    clean: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: resolve(__dirname, 'public', 'index.html')
    }),
    new ProgressPlugin()
  ]
}

export default config;