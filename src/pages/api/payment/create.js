import { STRIPE_PRIVATE_KEY } from "@/configs";

const stripe = require('stripe')(STRIPE_PRIVATE_KEY)


export default async function handler(req, res){
  if(req.method == 'GET'){
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

     res.send({status:'ok', session})
  }
  
}



