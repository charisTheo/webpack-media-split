const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const MediaQueryPlugin = require('media-query-plugin');
const path = require( "path" );

module.exports = {
   context: __dirname,
   entry: {
      main: "./src/index.js"
   },
   output: {
      path: path.resolve( __dirname, "docs" ),
      filename: "[name].js",
      chunkFilename: "[name].js",
      publicPath: "./",
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
               "style-loader",
               "css-loader",
               MediaQueryPlugin.loader,
               "postcss-loader",
            ],
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve( __dirname, "public/index.html" ),
         filename: "index.html",
      }),
      new MediaQueryPlugin({
         include: [
            'styles',
         ],
         queries: {
            'screen and (min-width: 767px)': 'tablets-and-above',
            'screen and (min-width: 959px)': 'desktop',
         }
      })
   ]
};
