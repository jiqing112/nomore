const webpack = require("webpack")
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
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}
