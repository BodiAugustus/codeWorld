import ContactForm from '@components/contact/contact-form';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';

function ContactPage() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div>
      <Sidebar />
      <Submenu />
      <div onMouseOver={closeSubmenu}>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
