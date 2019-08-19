const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {                
        test: [/.css$|.scss$/],
        use:[                    
          MiniCssExtractPlugin.loader,
          // 'style-loader',                  
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
  // make these extensions optional
  resolve: {
    extensions: ['.js', '.scss']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css' 
    })
  ]
};