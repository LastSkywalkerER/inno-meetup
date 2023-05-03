import { AES, enc } from 'crypto-js';

if (!process.env.REACT_APP_SECRET) {
  throw Error('Not enough env');
}

const secret = process.env.REACT_APP_SECRET;

const decrypt = (env?: string): string => {
  if (!env) {
    throw Error('Not enough env');
  }

  return JSON.parse(AES.decrypt(env, secret).toString(enc.Utf8));
};

export const config = {
  isDev: process.env.REACT_APP_DEVELOPMENT,
  secret: decrypt(process.env.REACT_APP_REVEAL_SECRET),
};
