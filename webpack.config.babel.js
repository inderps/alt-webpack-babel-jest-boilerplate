import webpack from 'webpack';
import path from 'path';

const DEPLOY = process.env.DEPLOY;
let plugins = [new webpack.HotModuleReplacementPlugin()];

if(DEPLOY) {
  plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ];
}

const config = {
  entry: {
    app: DEPLOY ? ['./src/main.js'] : ['webpack/hot/dev-server', './src/main.js']
  },
  output: {
    publicPath: '/',
    path: './build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: DEPLOY ? 'babel-loader' : 'react-hot!babel-loader'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded!postcss-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  plugins: plugins
};

export default config;