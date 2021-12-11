/* eslint-disable @typescript-eslint/no-var-requires */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const paths = require("./paths");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.appIndexJs],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  // Customize the webpack build process
  plugins: [
    new Dotenv(),
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store", "**/*.html"],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      //   favicon: paths.src + "/images/favicon.png",
      template: paths.appHtml, // template file
      filename: "index.html", // output file
    }),
    new ProvidePlugin({
      h: ["preact", "h"],
    }),
    // ESLint configuration
    new ESLintPlugin({
      failOnError: false,
      files: [paths.src],
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: "esbuild-loader",
        exclude: /node_modules/,
        options: {
          sourcemap: true,
          loader: "tsx",
          target: "es2015",
        },
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i, type: "asset/resource" },

      // Fonts to build folder
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },

  resolve: {
    modules: [paths.src, "node_modules"],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
};
