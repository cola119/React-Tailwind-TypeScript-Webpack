import path from "path";
import { ConfigurationFactory } from "webpack";
import HTMLPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: ConfigurationFactory = () => ({
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css",
    }),
    new HTMLPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
  ],
});

export default config;
