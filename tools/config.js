import path from 'path';
import webpack, { DefinePlugin, BannerPlugin } from 'webpack';
import autoprefixer from 'autoprefixer';
import merge from 'lodash.merge';

const config = {
  output: {
    filename: 'main.js',
    publicPath: '/',
  },

  debug: false,
  devtool: false,
  entry: './src/main.js',

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],


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
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded!postcss-loader'
    }, {
      test: /\.(png|jpg|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
};

const devConfig = merge({}, config, {
  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: [
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
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
  }
});

const configToExport = global.WATCH === undefined ? config : devConfig;

export default configToExport;