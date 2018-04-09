var path = require("path");
var pxtorem = require('postcss-pxtorem');
var config = require('./config');

module.exports = {
  mode:'development',
  output:{
    // publicPath:__dirname + '/dist/',
    // publicPath:__dirname + '/src/',
  },
  context: __dirname + '/src',
  entry: './index.js',
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    },{
        test: /\.css$/,
        use: ['style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [require('autoprefixer'),
                            pxtorem({
                              rootValue: 75,
                              propWhiteList: [],
                            })
                  ]
                }
              }
             ]
      },{
        test: /\.less$/,
        use: ['style-loader', 'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [require('autoprefixer'),
                            pxtorem({
                              rootValue: 75,
                              propWhiteList: [],
                            })
                  ]
                }
              },
              'less-loader'
             ]
      },
    ]
  },
};
