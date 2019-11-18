const path = require('path');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { isDevelopment, clientBasePath, clientTsConfig } = require('./utils');
const plugins = require('./plugins');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        { targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
      ],
      '@babel/preset-react',
    ],
    plugins: [
      isDevelopment && 'react-hot-loader/babel',
      // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }],
    ].filter(Boolean),
  },
};

const configuration = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'cheap-module-eval-source-map' : 'source-map',
  entry: {
    polyfill: '@babel/polyfill',
    app: [
      isDevelopment && 'webpack-hot-middleware/client',
      path.join(clientBasePath, 'index.tsx')
    ].filter(Boolean),
  },
  resolve: {
    modules: ['node_modules', 'client'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
    plugins: [new TsconfigPathsPlugin({ configFile: clientTsConfig })],
    alias: {
      '@client': clientBasePath,
      'react-dom': isDevelopment ? '@hot-loader/react-dom' : 'react-dom',
    }
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'static/[name].[hash].js',
  },
  optimization: {
    minimize: !isDevelopment,
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
          vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor'
          }
      }
    }
  },
  plugins: plugins.filter(Boolean),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: clientBasePath,
        use: [
          babelLoader,
          {
            loader: 'ts-loader',
            options: {
              configFile: clientTsConfig
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ExtractCssChunks.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/images/[name].[ext]',
            },
          }
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/fonts/[name].[ext]',
            },
          }
        ],
      }
    ]
  }
}

module.exports = configuration;
