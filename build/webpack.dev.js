const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const nodeExternals = require('webpack-node-externals')

const client = merge(common, {
  mode: 'development',
  entry: './client/main.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: '[name].[chunkhash:8].bundle.js',
    filename: 'client.bundle.js',
    publicPath: '/',
  },
  devtool: 'eval-cheap-module-source-map',
})

const server = merge(common, {
  mode: 'development',
  entry: './server/main.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: '[name].[chunkhash:8].bundle.js',
    filename: 'server.bundle.js',
    publicPath: '/',
  },
  target: 'node',
  externals: [nodeExternals()]
})

module.exports = [client, server]