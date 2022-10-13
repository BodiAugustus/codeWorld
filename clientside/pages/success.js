import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';

import Comments from '@components/input/comments';
import Head from 'next/head';

function SuccessPage() {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div
      className="
    xxxs:-mt-20
    xxs:-mt-16
    xs:-mt-[12vh]
    small:-mt-28
    md:-mt-8
    lg:mt-14"
    >
      <Head>
        <title>Successful Registration!</title>

        <meta
          name="Successful Payment page"
          content="Confirms that a successful payment has been made and provides instructions on what to do next."
        />
      </Head>
      <Sidebar />
      <Submenu />
      <div onMouseOver={closeSubmenu} className="md:w-[120%] lg:w-[100%]">
        <div
          className="gradient2 h-[62vh] 
        xxxs:mb-6
        xxs:mb-0
        md:mb-6"
        >
          <h1
            className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100  tracking-tight
            xxxs:pt-10 
            xxs:pt-5
            xs:pt-20
          md:pt-44
          lg:pt-24"
          >
            Thank you for your payment!
          </h1>
          <h2 className="text-center max-w-[70%] mx-auto font-poppins font-medium text-slate-100  tracking-tight pt-6">
            Please follow the instructions below
          </h2>
        </div>
        <div className="text-center font-poppins max-w-[1000px] mx-auto p-8 py-6">
          <div className="mb-6">
            <h2 className="tracking-tighter pt-2">
              Complete the New Student registration form!
            </h2>
            <p
              className="xxs:-mb-5
            md:-mb-0"
            >
              Please fill out and submit the new student registration form below
            </p>
            <Comments />
            <h2
              className="tracking-tighter 
            xxxs:-mt-5
            
            md:pt-2 md:-mt-0"
            >
              Confirm your spot!
            </h2>
            <p>
              Please call or email us at Code World to confirm that your class
              date and time is available as soon as possible after making your
              purchase. Since we offer a variety of payment options at Code
              World, including cash, there is a small chance that a class may
              have already been filled before the database has had a chance to
              be updated to reflect those enrollments made by parents using cash
              as a payment.
            </p>
            <p>
              In such a rare event where a class that you have paid for has
              already been fully booked, every reasonable effort will be made to
              accomodate your child into another class day or time which suits
              your schedule. If no option is deemed workable, then the account
              which made the purchase will receive a full refund for the online
              payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
