import { STRIPE_PRIVATE_KEY } from "@/configs";

const stripe = require('stripe')(STRIPE_PRIVATE_KEY)


export default async function handler(req, res){
  if(req.method == 'POST'){
    const retrive = await stripe.checkout.sessions.retrieve(
      "cs_test_a1PYBkRixkG6LQ9eNeCBtrWRGwVSVAaXyzZ41Mbfys3VD5lM2q7tcVOB68"
    )
    console.log(retrive, 'retrive');
    //  res.send({status:'ok', session})
  }
}



