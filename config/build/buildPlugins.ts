import CircularDependencyPlugin from 'circular-dependency-plugin'
// eslint-disable-next-line import/default
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type BuildOptions } from './types/config'

export function buildPlugins ({ paths, isDev, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] {
  const isProd = !isDev

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project)
    })
  ]

  if (isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: true
      })
    )
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    )

    plugins.push(
      new CopyPlugin({
        patterns: [
          { from: paths.locales, to: paths.buildLocales }
        ]
      })
    )
  }

  return plugins
}
