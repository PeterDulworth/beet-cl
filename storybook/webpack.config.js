// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

var path = require('path');

module.exports = {
  plugins: [],
  module: {
    rules: [
      {
        test: [/.css$|.scss$/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: require(path.join(process.cwd(), 'src/sass/index.js')),
            },
          },
        ],
      },
      // story source addon
      {
        test: /stories\.js?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
    ],
  },
};
