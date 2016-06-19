import {WebpackConfig, get} from '@easy-webpack/core'
const webpack = require('webpack')

/**
 * @param externals list packages that should be used as node modules, directly from node_modules (without bundling)
 */
export function electronMain(filename = 'electron.js') {
  return function electronMain(this: WebpackConfig): WebpackConfig {
    return {
      target: 'electron',

      output: {
        filename
      },

      plugins: [
        new webpack.BannerPlugin({
          banner: `require('source-map-support').install();`,
          raw: true, entryOnly: false
        })
      ].concat(get(this, 'plugins', [])),

      node: {
        __dirname: false,
        __filename: false
      },

      externals: [
        'source-map-support',
      ].concat(get(this, 'externals', []))
    }
  }
}