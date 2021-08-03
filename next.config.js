const UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      path = require("path");

module.exports = {
  "entry": ["./app/index.js"],
  "output": {
    "path": "output",
    "filename": "[name]-[chunkhash].js",
    "libraryTarget": "umd"
  },
  "module": {
    rules: [
      {
        "exclude": "/node_modules/",
        "include": "./app/",
        "loader": "babel-loader",
        "options": {
          "presets": ["es2015", "react"]
        },
        "test": /\.jsx?$/
      },
      {
        "exclude": "/node_modules/",
        "use": ExtractTextPlugin.extract({
          "fallbackLoader": "style-loader",
          "loader": ["css-loader", "sass-loader"]
        }),
        "test": /\.scss$/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name]-[contenthash].css")
  ]
}