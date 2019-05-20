const path = require("path")
import webpack from "webpack";
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    //入口： 有且可拥有多个
    entry: {
        //babel-polyfill "core-js/fn/promises"
        main: ["./src/main.js"]
    },
    //开发环境：开发 & 生产
    mode: "development",
    // 出口：只能有一个
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/'
    },
    //本地服务器
    devServer: {
        contentBase: "dist",
        hot: true,
        overlay: true
    },
    // 本地服务的调试工具
    devtool: 'source-map',
    module: {
        rules: [
            //js loaders
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader"
                }, ],
                exclude: /node_modules/
            },
            // css loaders
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            //html loaders
            {
                test: /\.html$/,
                use: [
                    // {
                    //     loader: "file-loader",
                    //     options: {
                    //         name: "[name].html"
                    //     }
                    // },
                    // {
                    //     loader: "extract-loader",
                    // },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            //image
            {
                test: /\.(jpg|gif|png)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "images/[name]-[hash:16].[ext]"
                    }
                }]
            },

        ]
    },
    plugins: [
        new
        webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}