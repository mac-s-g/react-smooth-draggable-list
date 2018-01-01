const path = require("path")
const webpack = require("webpack")
const wds_port = 2100

const PATHS = {
  src: path.join(__dirname, "..", "src"),
  js: path.join(__dirname, "..", "src", "js"),
  build: path.join(__dirname, "..", "demo", "dist"),
  demo: path.join(__dirname, "..", "demo")
}

const config = {
  entry: [PATHS.demo + "/js/entry.js"],
  externals: {},
  output: {
    path: PATHS.demo + "/dist",
    filename: "main.js",
    library: "react-smooth-draggable-list",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: [".js", ".json", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        include: [PATHS.js, PATHS.demo]
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "url-loader?limit=100000"
          }
        ]
      }
    ]
  }
}

module.exports = config
