import classes from './error-alert.module.css';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';
function ErrorAlert(props) {
  const { closeSubmenu } = useGlobalContext();
  return (
    <>
      <Sidebar />
      <Submenu />
      <div className={classes.alert} onMouseOver={closeSubmenu}>
        {props.children}
      </div>
    </>
  );
}

export default ErrorAlert;
