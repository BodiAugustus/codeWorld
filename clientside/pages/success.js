import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';

import Head from 'next/head';

function SuccessPage() {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div className="mt-14">
      <Head>
        <title>Successful Registration!</title>

        <meta
          name="Successful Payment page"
          content="Confirms that a successful payment has been made and provides instructions on what to do next."
        />
      </Head>
      <Sidebar />
      <Submenu />
      <div onMouseOver={closeSubmenu}>
        <div className={` gradient5 h-[62vh] mb-6`}>
          <h1 className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100 pt-36 tracking-tight">
            Thank you for your payment!
          </h1>
          <h2 className="text-center max-w-[70%] mx-auto font-poppins font-medium text-slate-100 pt-40 tracking-tight">
            Please follow the instructions given below:
          </h2>
        </div>
        <div className="text-center font-poppins max-w-[1000px] mx-auto p-8 py-6">
          <div className="mb-12">
            <h2 className="tracking-tighter pt-2">
              Instructions for Parents Paying by Credit or Debit Card
            </h2>
            <p>
              Please call or email us at Code World to confirm that your class
              date and time is available as soon as possible after purchasing.
              Since we offer a variety of payment options at Code World,
              including cash and crypto, there is a small chance that a class
              may have been already filled before the database has had a chance
              to be updated for those who are making payments with a credit or
              debit card.
            </p>
            <p>
              In such a rare event where a class that you have paid for has
              already been fully booked, every reasonable effort will be made to
              accomodate your child into another class day or time which suits
              your schedule. If no option is deemed workable, then the account
              which made the purchase will receive a full refund of the online
              payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
