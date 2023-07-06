console.log(
  '🚀 ~ file: config.ts:2 ~ REACT_APP_CHECKOUT_PUBLIC_API_KEY:',
  process.env.REACT_APP_CHECKOUT_PUBLIC_API_KEY,
);

const config = {
  host_url: 'http://localhost:3000',
  path_prefix: '/',
  maya_checkout: {
    url: 'https://pg-sandbox.paymaya.com/checkout/v1/checkouts',
    pub_api_key: 'pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah',
    sec_api_key: 'not required',
  },
};

export default config;
