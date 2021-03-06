const path = require("path")
const webpack = require("webpack")
const wds_port = 2100

const PATHS = {
  src: path.join(__dirname, "..", "src"),
  js: path.join(__dirname, "..", "src", "js"),
  build: path.join(__dirname, "..", "dist")
}

const config = {
  entry: [path.join(PATHS.js, "index.js")],
  externals: {},
  output: {
    path: PATHS.build,
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
        include: [PATHS.js]
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
