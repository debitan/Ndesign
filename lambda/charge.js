"use strict";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = (event, context, callback) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return callback(null, {
      statusCode: 405,
      body: 'Method Not Allowed'
    });
  }

  const data = JSON.parse(event.body);

  if (!data.token || parseInt(data.amount) < 1) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Some required fields were not supplied.'
      })
    });
  }

  stripe.charges.create({
    amount: parseInt(data.amount),
    currency: 'jpy',
    description: '±nDesign',
    receipt_email: data.email,
    shipping: {
      address: {
        line1: data.addressLine1,
        line2: data.addressLine2,
        postal_code: data.postcode,
        state: data.prefecture
      },
      name: data.name,
      phone: data.phone
    },
    source: data.token
  }).then(({
    status,
    payment_method_details,
    id
  }) => {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status,
        payment_method_details,
        id
      })
    });
  }).catch(err => {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: `Error: ${err.message}`
      })
    });
  });
};