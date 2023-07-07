import axios from 'axios';
import config from '../config';
import {Buffer} from 'buffer';

export const retrievePayment = async (checkoutId: string) => {
  const token: string = Buffer.from(
    `${config.maya_checkout.pub_api_key}:`,
    'binary',
  ).toString('base64');

  const headers = {
    accept: 'application/json',
    authorization: `Basic ${token}`,
    'content-type': 'application/json',
  };

  const response = await axios.get(
    `https://pg-sandbox.paymaya.com/payments/v1/payments/${checkoutId}`,
    {headers},
  );

  if (response) {
    console.log(
      '🚀 ~ file: retrievePayment.ts:23 ~ retrievePayment ~ response:',
      response,
    );
  }

  return response.data;
};
