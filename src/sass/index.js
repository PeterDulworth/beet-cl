// we use sass-resources-loader for scss resources we want to be globally available (like mixins and variables)
// important: nothing here should produce any css code as it will be included in EVERY scss file and make our bundle sizes
// way too big
// source: https://itnext.io/sharing-sass-resources-with-sass-resources-loader-and-webpack-ca470cd11746
const path = require('path');

const resources = [['_colors.scss'], ['_spacing.scss']];

module.exports = resources.map((filePath) =>
    path.resolve(__dirname, ...filePath)
);
