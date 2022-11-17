//for STRIPEe
import { loadStripe } from '@stripe/stripe-js';

const myDomain = 'https://www.codeworld.io/';
//http://localhost:3000

export async function checkout({ lineItems }) {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        'pk_live_51LqthpFSa0TezXP7Vne2W4ClGNU4StnEn9EQg2H5YqOQNtA24D2s3ElRFipquaBS4JF68a9RQX7TRc19InussUeA00dSpGjwlc'
      );
    }
    return stripePromise;
  };
  // This loads stripe
  const stripe = await getStripe();

  //redirect to checkout

  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${myDomain + '/success'}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${myDomain + '/failure'}`,
  });
}
