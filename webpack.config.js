var webpack = require('webpack');
var debug = process.env.Node_ENV !== "production";

module.exports = {
    devtool: debug ? "inline-sourcemap": null,
    entry: "./src/js/client.js",
    output: {
        path: "src/",
        filename: "bundle.js"
    } ,
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    },

     plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
    ],
};
