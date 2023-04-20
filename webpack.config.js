const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development",
    entry: "./app/index.ts",
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    resolve: {
        extensions: [".ts", ".js", ".vue"],
        alias: {
            "@composables": path.resolve(__dirname, "app/composables"),
            "@atoms":  path.resolve(__dirname, "app/components/atoms"),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.vue/,
                use: "vue-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/index.html",
        }),
        new VueLoaderPlugin(),
    ],
};
