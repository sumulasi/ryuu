const path = require("path"),
    glob = require("glob"),
    plugins = require("./plugins");

module.exports = [
    {
        mode: "development",
        watchOptions: {
            ignored: ["vendor", "inc", "node_modules"],
        },
        entry: {
            vendor: glob.sync("./assets/js/vendor/*.js"),
            main: glob.sync("./assets/js/custom.js")
        },
        externals: {
            jquery: 'jQuery',
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "./assets/js"),
        },
        stats: {
            all: false,
            assets: true,
            colors: true,
            errors: true,
            performance: true,
            timings: true,
            warnings: true,
        },
        module: {
            strictExportPresence: true,
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                }
            ]
        },
        plugins: plugins
    },
];
