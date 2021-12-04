const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  mode: "production",
  entry: "./lib/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: require("path").resolve(__dirname, "dist"),
    filename: "hana.js",
    library: "Hana",
    libraryTarget: "umd",
    globalObject: "this",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ parallel: true })],
  },
}
