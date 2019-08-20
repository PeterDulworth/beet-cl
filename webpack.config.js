var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // should match package.json "main" field
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js', // webpack will produce: build/index.js
    publicPath: '',
    libraryTarget: 'commonjs2', // important for deploying to NPM
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|build|dist|storybook-static)/,
        use: {
          loader: 'babel-loader', // .babelrc has additional settings
        },
      },
      {
        test: [/.css$|.scss$/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          // we use sass-resources-loader for scss resources we want to be globally available (like mixins and variables)
          // source: https://itnext.io/sharing-sass-resources-with-sass-resources-loader-and-webpack-ca470cd11746
          {
            loader: 'sass-resources-loader',
            options: {
              resources: require(path.join(
                process.cwd(),
                '../src/sass/index.js',
              )),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
    ],
  },
  // define explicitly the file types we intend to deal with
  resolve: {
    extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  externals: {
    react: 'commonjs react',
  },
};
