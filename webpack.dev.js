// Import node.js libraries
const path = require("path");

// Import third-party libraries
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Import own libraries

/**********************************************************************************************************************/
module.exports = {
  mode: "development",

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", "*"],

    alias: {
      src: path.resolve(__dirname, "./src"),
      component: path.resolve(__dirname, "./src/component"),
      lib: path.resolve(__dirname, "./src/lib"),
      media: path.resolve(__dirname, "./src/media")
    }
  },
  entry: {
    app: "./src/main.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
              plugins: ["react-hot-loader/babel"]
            }
          },
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./media/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    })
  ],

  devServer: {
    host: "0.0.0.0"
  },

  devtool: "inline-sourcemap"
};
