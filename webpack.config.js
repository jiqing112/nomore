const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: __dirname + "/assets/js/index.js",
    output: {
        path: __dirname + "/assets/build",
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$|\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            }
        ]
    },
    plugins: [new ExtractTextPlugin("app.css")]
};
