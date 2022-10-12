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
    <div
      className="bg-slate-200 pb-14 font-poppins
    xxxs:-mt-32
    xxs:-mt-28
    xs:-mt-36
    small:-mt-40
    md:-mt-20 md:w-[120%] lg:w-[100%]
    lg:mt-14
    "
    >
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
        className={` gradient2 mt-14 
        xxxs:-mb-5
        h-[62vh] md:mb-6
        `}
      >
        <h1
          className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100 pt-36 tracking-tight
        xs:pt-44
        md:pt-60
          lg:pt-24"
        >
          CONTACT
        </h1>
      </div>
      <div className="section ">
        <h1
          className="my-4 font-bold tracking-tight text-center pt-10 text-emerald-400
        xxxs:text-4xl
        md:text-5xl "
        >
          How can we help?
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
