import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';
import revealSections from '@helpers/reveal-sections';
import Head from 'next/head';

function BillingPage() {
  const { closeSubmenu } = useGlobalContext();
  revealSections();
  return (
    <div
      className="max-w-[1536px]
      xxxs:-mt-20
      xxs:-mt-16
      xs:-mt-[12vh]
      
    md:-mt-6 md:w-[120%] 
    lg:w-[100%] lg:mt-14
    2xl:mt-20
    "
    >
      <Head>
        <title>Billing & Payments</title>

        <meta
          name="Billing & Payments Page"
          content="Provides all of the information about billing and payments."
        />
      </Head>
      <Sidebar />
      <Submenu />
      <div onMouseOver={closeSubmenu}>
        <div className={` gradient3 h-[62vh] mb-6`}>
          <h1
            className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100 tracking-tight
            xxxs:pt-28
            xs:pt-40
          md:pt-60
          lg:pt-36
          2xl:pt-52"
          >
            BILLING & PAYMENTS
          </h1>
        </div>
        <div className="section text-center font-poppins max-w-[1000px] mx-auto p-8 py-6">
          <div className="mb-12">
            <h2
              className="tracking-tighter 
            xxxs:-mt-6
            md:pt-2 md:-mt-0"
            >
              Payments General
            </h2>
            <p>
              Payment of 1.25 million Rupiah is required to be fully paid before
              attending any classes each month. Payment can be made by cash,
              credit or debit card.
            </p>
            <p>
              Class seats are booked on a first-come, first-serve basis each
              month with precedence given to returning students. Once a class is
              full however, we will not retroactively remove a student at the
              request of another parent who wishes to have that time slot, even
              if that parents child has been attending recurrently.
            </p>
            <p>
              To help ensure that your child stays in the same class and time
              slot desired, please ensure that prompt payment is made at the
              start of every month.
            </p>
            <p>Cash payments are to be made in person.</p>
          </div>

          <div>
            <h2
              className="tracking-tighter xxxs:-mt-4
            md:-mt-0"
            >
              Refunds & Cancellations
            </h2>
            <p>
              You will not be entitled to refunds for a purchased monthly
              membership which you elect to cancel or are absent from. Our
              coding center uses student registrations to predict and obtain the
              resources needed to provide the required services to our students.
              Therefore, refunding student cancellations would have a negative
              impact on the services provided to other students.
            </p>
            <p
              className="
            xxxs:-mb-0
            md:pb-6"
            >
              If you elect to cancel your monthly membership in the middle of a
              pre-paid period, you can choose to continue to access the classes
              for the remainder of the pre-paid period, or have your access
              terminated but with no refund or proration of any charges
              withstanding. Missed classes do not roll over to a new month. The
              monthly membership is for one two-hour class each week with thirty
              minutes after class time for a total of ten hours instructional
              time per month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingPage;
