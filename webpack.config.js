import path from "path";
import {fileURLToPath} from "url";
import {UserscriptPlugin} from "webpack-userscript";
import TerserPlugin from "terser-webpack-plugin";
import metadata from "./metadata.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = process.env.NODE_ENV === "development";
if (dev) metadata.name += " Dev"

export default {
    mode: dev ? "development" : "production",
    entry: path.resolve(__dirname, "src", "index.ts"),
    resolve: {
        extensions: [".js", ".tsx", ".ts"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: dev ? "index.dev.js" : "index.prod.js",
    },
    devtool: dev ? "eval" : false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                },
                exclude: /node-modules/,
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
                exclude: /node-modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /node-modules/,
            },
        ],
    },
    optimization: dev ? undefined : {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                mangle: false,
                compress: {
                    defaults: false,
                    ecma: "2020",
                    drop_console: ["debug"],
                },
                format: {
                    comments: false,
                    indent_level: 2,
                    beautify: true,
                },
            }
        })],
    },
    experiments: {
        topLevelAwait: true,
    },
    devServer: {
        port: 8080,
        hot: false,
        client: false,
        devMiddleware: {
            writeToDisk: true,
        },
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    plugins: [
        new UserscriptPlugin({
            headers: metadata,
            proxyScript: dev ? {
                baseUrl: "http://localhost:8080",
                filename: "[basename].proxy.user.js",
            } : undefined,
        }),
    ],
};
