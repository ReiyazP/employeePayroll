const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index",
  output: {
    publicPath: "auto",
  },

  resolve: {
    extensions: [".js", ".json"],
  },
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html",
    }),
  ],
};
