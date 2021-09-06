const webpack = require("webpack"),
    CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
];
