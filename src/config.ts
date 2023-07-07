import Config from 'react-native-config';

console.log(
  '🚀 ~ file: config.ts:2 ~ Config:',
  Config.REACT_APP_CHECKOUT_PUBLIC_API_KEY,
);

const config = {
  host_url: 'http://localhost:3000',
  path_prefix: '/',
  maya_checkout: {
    url: 'https://pg-sandbox.paymaya.com/checkout/v1/checkouts',
    pub_api_key: 'pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah',
    sec_api_key: Config.REACT_APP_CHECKOUT_SECRET_API_KEY || 'not required',
  },
};

export default config;
