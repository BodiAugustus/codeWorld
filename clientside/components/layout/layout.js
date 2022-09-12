import { useContext } from 'react';
import MainHeader from './main-header';
import Notification from '@components/ui/notification';
import NotificationContext from 'store/notification-context';
import Footer from './footer';

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <div className=" max-w-[1568px]">
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <Footer />
    </div>
  );
}

export default Layout;
