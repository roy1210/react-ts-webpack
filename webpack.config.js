const path = require('path');
const rules = [
  {
    // all the tsx format files exclude node_modules, load by babel
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  }
];

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: { rules },
  // omit file format name
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  devServer: {
    contentBase: './',
    port: 5000
  }
};
