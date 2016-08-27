var webpack = require('webpack');
var path = require('path');

module.exports = {
  output: {
    // sourcemap support for IntelliJ/Webstorm
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
    plugins: [
    //provides variables by default to all modules
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDom': 'react-dom',
      'Redux': 'redux'
    }),
  ],
  resolve: {
    root: [path.resolve(__dirname, 'src/js'), path.resolve(__dirname, 'node_modules')]
  },
  target: 'node' // in order to ignore built-in modules like path, fs, etc.
};
