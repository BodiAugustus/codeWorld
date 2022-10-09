import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';

import Head from 'next/head';

function FailurePage() {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div className="mt-14">
      <Head>
        <title>Unsuccessful Registration!</title>

        <meta
          name="UnSuccessful Payment page"
          content="Informs the user if a payment made through Stripe using a debit or credit card has failed along with instructions on what to do next."
        />
      </Head>
      <Sidebar />
      <Submenu />
      <div onMouseOver={closeSubmenu}>
        <div className={` gradient6 h-[62vh] mb-6`}>
          <h1 className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100 pt-36 tracking-tight">
            Your Payment Failed to Process!
          </h1>
          <h2 className="text-center max-w-[70%] mx-auto font-poppins font-medium text-slate-100 pt-40 tracking-tight">
            Please follow the instructions given below:
          </h2>
        </div>
        <div className="text-center font-poppins max-w-[1000px] mx-auto p-8 py-6">
          <div className="mb-12">
            <h2 className="tracking-tighter pt-2">
              Something went wrong with your payment!
            </h2>
            <p>
              Please confirm that your card information was entered correctly.
              For credit and debit card payments Code World uses the 3rd party
              software payment provider known as Stripe. Stripe currently only
              accepts American Express, China Union Pay, Discover, Diners, Japan
              Credit Bureau, Mastercard and Visa. If you are trying to use
              another type of card then the payment will not process
              successfully.
            </p>
            <p>
              If you are unable to successfully make a payment using your credit
              or debit card for any reason, please email or call us to set up an
              alternative method, such as using cash or one of our accepted
              cryptocurrencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FailurePage;
