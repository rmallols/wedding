var path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, '/dist/')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    port: 9000
  }
};
