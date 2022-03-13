const path = require("path"),
  HTMLPlugin = require("html-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
    
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            // plugins: [
              //     'babel-plugin-transform-class-properties'
              // ]
          },
        },
      },
    ],
  },
  plugins: [
    
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new HTMLPlugin({
      title: "rare match",
      filename: "index.html",
      meta: {
        discription: "clothing app",
        author:"K.T Motshoana"
      },
      // favicon:".src/favicon/icon.png",
      template:"./index.html"
    })
  ],
};
