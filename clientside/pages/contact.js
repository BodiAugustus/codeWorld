import ContactForm from '@components/contact/contact-form';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';

function ContactPage() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="bg-slate-200">
      <Sidebar />
      <Submenu />
      <div onMouseOver={closeSubmenu}>
        <h1 className="my-4 font-bold tracking-tight text-center pt-20">
          How can we help you?
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
