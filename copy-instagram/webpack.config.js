const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "/dist"),
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          }
        }
      }
    ]
  },
  devServer: {
    overlay: true,
    port: 8005
  }
};
