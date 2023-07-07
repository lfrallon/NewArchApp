import Config from 'react-native-config';

const config = {
  host_url: 'http://localhost:3000',
  path_prefix: '/',
  maya_checkout: {
    url: 'https://pg-sandbox.paymaya.com/checkout/v1/checkouts',
    pub_api_key: Config.REACT_APP_CHECKOUT_PUBLIC_API_KEY,
    sec_api_key: Config.REACT_APP_CHECKOUT_SECRET_API_KEY || 'not required',
  },
};

export default config;
