const webpack = require("webpack");
const path = require("path");

const config = {
    entry: "./src/index.js",
    output: {
        filename: "webpack_output.js",
        path: path.resolve(__dirname, "../public/dist/"), // 👈 Change output directory,
        library: {type: "module"}
    },
    experiments: {
        outputModule: true, // Required for ES module output
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Process JS and JSX files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },

    mode: "development",
    watch: true // 👈 Enable watch mode
};


// Run Webpack in Watch Mode
const compiler = webpack(config);

compiler.watch(
    {
        aggregateTimeout: 300, // Delay rebuild after the first change (in ms)
        ignored: /node_modules/ // Ignore changes in node_modules
    },
    (err, stats) => {
        if (err) {
            console.error("Webpack watch error:", err);
            return;
        }
        console.log("Webpack build updated:\n", stats.toString({ colors: true }));
    }
);
