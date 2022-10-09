import ContactForm from '@components/contact/contact-form';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';
import revealSections from '@helpers/reveal-sections';
import Head from 'next/head';

function ContactPage() {
  const { closeSubmenu } = useGlobalContext();
  revealSections();
  return (
    <div className="bg-slate-200 mt-14 pb-14 font-poppins">
      <Head>
        <title>Contact</title>

        <meta
          name="Contact Us Page"
          content="Provides an email submission form to reach out with any questions, comments or concerns."
        />
      </Head>
      <Sidebar />
      <Submenu />
      <div
        onMouseOver={closeSubmenu}
        className={` gradient2 h-[62vh] mt-14 mb-6`}
      >
        <h1 className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100 pt-36 tracking-tight">
          CONTACT
        </h1>
      </div>
      <div className="section">
        <h1 className="my-4 font-bold tracking-tight text-center pt-6 text-emerald-400 ">
          How can we help?
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
