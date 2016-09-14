const path = require('path');
var webpack = require('webpack');
var debug = process.env.Node_ENV !== "production";

module.exports = {
    // devtool: debug ? "inline-sourcemap": null,
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
        path: __dirname + '/build',
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
    resolve: {
      root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'src/lib'), path.resolve(__dirname, 'node_modules')]
    }
};
