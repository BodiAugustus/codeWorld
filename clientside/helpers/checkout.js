//for STRIPE
import { loadStripe } from '@stripe/stripe-js';

const myDomain = 'http://localhost:3000';
export async function checkout({ lineItems }) {
  let stripePromise = null;
  let maxStudents = 10;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
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
