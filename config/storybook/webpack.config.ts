import path from 'path'

import { DefinePlugin, type RuleSetRule } from 'webpack'
import type webpack from 'webpack'

import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.resolve!.alias = {
        ...config.resolve?.alias,
        '@': paths.src,
    }

    const rules = config.module?.rules as RuleSetRule[]

    if (config.module) {
        config.module.rules = rules.map((rule: RuleSetRule) => {
            if (
                rule.test instanceof RegExp &&
                rule.test.toString().includes('svg')
            ) {
                return { ...rule, exclude: /\.svg$/i }
            }

            return rule
        })

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        config.module.rules.push(buildCssLoader(true))
    }

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    )

    return config
}
