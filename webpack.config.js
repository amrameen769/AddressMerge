module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss|less)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader", // compiles Sass to CSS, using Node Sass by default
                    "less-loader"
                ]
            },
            {
                test: /\.(css)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader" // translates CSS into CommonJS
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: {
                    loader: "file-loader"
                }
            }
        ]
    }
};