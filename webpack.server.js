const path = require('path')
const nodeExternals = require('webpack-node-externals')
const config = require('./webpack.base')
const merge = require('webpack-merge')

const clientConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()]
}

module.exports = merge(config, clientConfig)