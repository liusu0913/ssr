const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
    entry: {
        client: path.resolve(__dirname, '../main/entry_client.js')
    },
    devtool: 'source-map',
    plugins: [
        // 此插件在输出目录中
        // 生成 `vue-ssr-client-manifest.json`。
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        }),
        new VueSSRClientPlugin()
    ],
    // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
    // 以便可以在之后正确注入异步 chunk。
    // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'manifest',
                    minChunks: Infinity
                }
            }
        }
    }
});