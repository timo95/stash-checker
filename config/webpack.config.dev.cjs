const path = require("path");
const webpack = require("webpack");
const {merge} = require("webpack-merge");
const UserScriptMetaDataPlugin = require("userscript-metadata-webpack-plugin");

const metadata = require("./metadata.cjs");
const webpackConfig = require("./webpack.config.base.cjs");

metadata.require.push(
    //"file://" + path.resolve(__dirname, "../dist/index.debug.js")
    "http://localhost:8080/index.debug.js"
);
Object.keys(metadata.name).forEach((key) => metadata.name[key] += " Dev")

const cfg = merge(webpackConfig, {
    mode: "development",
    cache: {
        type: "filesystem",
        name: "dev",
    },
    entry: {
        debug: webpackConfig.entry,
        "dev.user": path.resolve(__dirname, "empty.cjs"),
    },
    output: {
        filename: "index.[name].js",
        path: path.resolve(__dirname, "../dist"),
    },
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
        hot: false,
        client: false,
        devMiddleware: {
            writeToDisk: true,
        },
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new UserScriptMetaDataPlugin({
            metadata,
        }),
        new webpack.DefinePlugin({
            LOCALHOST_URL: JSON.stringify("http://localhost:8080/index.debug.js"),
        }),
    ],
});

module.exports = cfg;
