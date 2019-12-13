const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = async (req, res) => {
  // Only allow POST
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed')
  }

  const data = JSON.parse(req.body);

  if (!data.token || parseInt(data.amount) < 1) {
    res.status(400).send(JSON.stringify({
      message: 'Some required fields were not supplied.',
    }))
    }

  await stripe.charges
    .create({
      amount: parseInt(data.amount),
      currency: 'jpy',
      description: '±nDesign',
      receipt_email: data.email,
      shipping: {
        address: {
          line1: data.addressLine1,
          line2: data.addressLine2,
          postal_code: data.postcode,
          state: data.prefecture,
        },
        name: data.name,
        phone: data.phone,
        },
      source: data.token,
    })
    .then(({ status, payment_method_details, id }) => {
      res.status(200).send(JSON.stringify({ status, payment_method_details, id }))
      })
    .catch(err => {
      res.status(400).send(JSON.stringify({
        message: `Error: ${err.message}`,
      }))
    });
};
