// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
		// should match package.json "main" field
    // filename: '[name].bundle.js',
    // path: __dirname + '/dist',
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|build|dist)/,
        use: {
          loader: "babel-loader"
        }
      },
      {                
        test: [/.css$|.scss$/],
        use:[                    
          // MiniCssExtractPlugin.loader,
          'style-loader',                  
          'css-loader',
          'sass-loader'
        ]            
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images'
            }
          }
        ]
      }
    ]
  },
  	// define explicitly the file types we intend to deal with
	resolve: {
		extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
	},
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: 'style.css' 
  //   })
  // ]
};