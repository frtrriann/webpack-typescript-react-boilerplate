import { merge } from "webpack-merge";

import common from "./webpack.common.js";
import paths from "./paths.js";

export default merge(common, {
  // Set the mode to development or production
  mode: "development",
  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    open: true,
    static: {
      directory: paths.build,
    },
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    compress: true,
    hot: true,
    port: 8080,
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1, modules: true },
          },
        ],
      },
    ],
  },
});
