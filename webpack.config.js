/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tsconfig = require('./tsconfig');
/* eslint-enable @typescript-eslint/no-var-requires */

const { compilerOptions: { baseUrl, paths } } = tsconfig;
const aliasReg = (str) => str.replace(/^(.*)\/\*$/, '$1');
const aliases = Object.keys(paths).reduce(
    (obj, a) => (obj[aliasReg(a)] = path.resolve(__dirname, aliasReg(`${baseUrl}/${paths[a]}`)), obj),
    {}
);

const getConfig = (node) => {

    const output = node
        ? {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'commonjs'
        }
        : {
            filename: 'colortranslator.web.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'window'
        };

    const plugins = [];

    if (node) {
        plugins.push(
            new CleanWebpackPlugin()
        );
    }

    return {
        mode: 'production',
        entry: './src/index.ts',
        output,
        resolve: {
            extensions: ['.ts'],
            alias: aliases
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    loader: 'ts-loader'
                }
            ]
        },
        plugins
    };
};

const nodeConfig = getConfig(true);
const webConfig = getConfig(false);

module.exports = [nodeConfig, webConfig];