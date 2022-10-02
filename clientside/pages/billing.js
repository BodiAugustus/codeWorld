import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';
import revealSections from '@helpers/reveal-sections';

function BillingPage() {
  const { closeSubmenu } = useGlobalContext();
  revealSections();
  return (
    <div className="mt-14">
      <Sidebar />
      <Submenu />
      <div onMouseOver={closeSubmenu}>
        <div className={` gradient3 h-[62vh] mb-6`}>
          <h1 className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100 pt-36 tracking-tight">
            BILLING & PAYMENTS
          </h1>
        </div>
        <div className="section text-center font-poppins max-w-[1000px] mx-auto p-8 py-6">
          <div className="mb-12">
            <h2 className="tracking-tighter pt-2">Payments</h2>
            <p>
              The full monthly payment of 150 USD is required to be paid in full
              before attending any classes. Payment can be made by cash, credit
              card, or Ethereum, Bitcoin, or Monero cryptocurrencies. Class
              seats are booked on a first-come, first-serve basis each month so
              to ensure your child stays in the same class and time they want
              please ensure prompt payment is made when reminded at the start of
              every month or else set up automatic payments using a credit card.
            </p>
          </div>

          <div>
            <h2 className="tracking-tighter ">Refunds and Cancellations</h2>
            <p>
              You will not be entitled to refunds for a purchased monthly
              membership which you elect to cancel. Our coding center uses
              student registrations to predict and obtain the resources needed
              to provide the required services to our students. Therefore,
              refunding student cancellations would have a negative impact on
              the services provided to other students.
            </p>
            <p className="pb-6">
              If you elect to cancel your monthly membership in the middle of a
              pre-paid period, you can choose to continue to access the classes
              for the remainder of the pre-paid period, or have your access
              terminated but with no refund or proration of charges
              withstanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingPage;
