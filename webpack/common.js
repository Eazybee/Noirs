const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

const SRC_DIR = "./src";
const env = dotenv.config().parsed || {};
const envKeys = Object.keys(env).reduce((accumulator, current) => {
  accumulator[`process.env.${current}`] = JSON.stringify(env[current]);
  return accumulator;
}, {});

module.exports = {
  entry: `${SRC_DIR}/index.ts`,
  output: {
    path: path.join(__dirname, "../build"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [SRC_DIR, "node_modules"]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public", "index.html"),
      inject: "body"
    }),
    new webpack.DefinePlugin(envKeys)
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  }
};
