import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';

function BillingPage() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div>
      <Sidebar />
      <Submenu />
      <div onMouseOver={closeSubmenu}>
        <div className={` gradient3 h-[52vh] mb-6`}>
          <h1 className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100 pt-24">
            BILLING & PAYMENTS
          </h1>
        </div>
        <div>
          <h2>Payments</h2>
          <p>
            I agree to allow Code World to charge my credit card $150.00 USD
            once a month. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Voluptate, eum?
          </p>
        </div>
        <div>
          <h2>Payments</h2>
          <p>
            I agree to allow Code World to charge my credit card $150.00 USD
            once a month. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Voluptate, eum?
          </p>
        </div>
        <div>
          <h2>Refunds and Cancellations</h2>
          <p>
            You will not be entitled to refunds for purchased Services which you
            elect to cancel. Our Franchised Locations use registrations to
            predict and obtain the resources needed to provide the Services to
            students. Therefore, refunding student cancellations may have a
            negative impact on the Services provided to other students.
          </p>
          <p>
            If you elect to cancel your Services in the middle of a pre-paid
            period, you can choose to continue to access the Services for the
            remainder of the pre-paid period, or have your access terminated but
            with no refund or proration of charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BillingPage;
