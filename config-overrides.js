/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const webpack = require('webpack');
const { override, addWebpackAlias, addWebpackResolve, addWebpackPlugin } = require('customize-cra');
const dotenv = require('dotenv');
const CryptoJS = require('crypto-js');

dotenv.config();

const secret = new Date().getMilliseconds().toString();

const encrypt = (envs) =>
  envs.reduce((acc, env) => {
    return {
      ...acc,
      ['REACT_APP_' + env]: CryptoJS.AES.encrypt(
        JSON.stringify(process.env[env]),
        secret,
      ).toString(),
    };
  }, {});

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
  addWebpackResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
  addWebpackPlugin(
    new webpack.EnvironmentPlugin({
      REACT_APP_DEVELOPMENT: process.env.NODE_ENV === 'development',
      REACT_APP_SECRET: secret,
      ...encrypt(['PRESENTATION_LINK', 'REVEAL_SECRET']),
    }),
  ),
);
