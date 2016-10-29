import {WebpackConfigWithMetadata, get} from '@easy-webpack/core'
const webpack = require('webpack')

/**
 * @param externals list packages that should be used as node modules, directly from node_modules (without bundling)
 */
export = function electronMain({filename = 'electron.js'} = {}) {
  return function electronMain(this: WebpackConfigWithMetadata): WebpackConfigWithMetadata {
    return {
      metadata: {
        ELECTRON: 'main'
      },

      target: 'electron',

      output: {
        filename
      },

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