'use strict';

const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  modify(baseConfig) {
    const appConfig = Object.assign({}, baseConfig);

    appConfig.plugins.push(new workboxPlugin.InjectManifest({
      swSrc: './src/sw.js',
      swDest: '../public/sw.js',
      importsDirectory: '../public'
    }))

    return appConfig;
  },
};
