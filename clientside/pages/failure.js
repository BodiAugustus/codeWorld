import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';

import Head from 'next/head';

function FailurePage() {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div
      className="max-w-[1536px]
      xxxs:-mt-20
      xxs:-mt-16
      xs:-mt-[12vh]
      
      md:-mt-8
    lg:mt-14
    2xl:mt-20"
    >
      <Head>
        <title>Unsuccessful Registration!</title>

        <meta
          name="UnSuccessful Payment page"
          content="Informs the user if a payment made through Stripe using a debit or credit card has failed along with instructions on what to do next."
        />
      </Head>
      <Sidebar />
      <Submenu />
      <div onMouseOver={closeSubmenu} className="md:w-[120%] lg:w-[100%]">
        <div className={` gradient6 h-[62vh] mb-6`}>
          <h1
            className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100 tracking-tight
            xxxs:pt-8
            xxs:pt-4
            xs:pt-16
            md:pt-44
          lg:pt-24
          2xl:pt-40"
          >
            Your Payment Failed to Process!
          </h1>
          <h2 className="text-center max-w-[70%] mx-auto font-poppins font-medium text-slate-100 pt-6 tracking-tight">
            Please follow the instructions below
          </h2>
        </div>
        <div className="text-center font-poppins max-w-[1000px] mx-auto p-8 py-6">
          <div
            className="xxxs:-mt-10
          md:mb-12 md:-mt-0"
          >
            <h2 className="tracking-tighter pt-2">
              Something went wrong with your payment!
            </h2>
            <p>
              Please confirm that your card information was entered correctly.
              For credit and debit card payments Code World uses the 3rd party
              software payment provider known as Stripe. Stripe currently only
              accepts American Express, China Union Pay, Discover, Diners, Japan
              Credit Bureau, Mastercard and Visa cards. If you are trying to use
              another type of payment card then the payment will not process
              successfully.
            </p>
            <p>
              If you are unable to successfully make a payment using your credit
              or debit card for any reason, please email or call us to set up an
              alternative method of payment, such as by using cash.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FailurePage;
