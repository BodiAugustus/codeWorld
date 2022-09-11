import Link from 'next/link';
import { useGlobalContext } from 'store/context';

import { FaBars } from 'react-icons/fa';
import styles from './main-header.module.css';
function MainHeader() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = e => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = e => {
    if (!e.target.classList.contains('link_btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className={styles.nav} onMouseOver={handleSubmenu}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <img src="/images/logo.svg" alt="" className={styles.logo} />
          <button className={styles.btn} onClick={openSidebar}>
            <FaBars className={styles.toggle_btn} />
          </button>
        </div>
        <ul className={styles.nav_links}>
          <li>
            <button onMouseOver={displaySubmenu} className="link_btn">
              products
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link_btn">
              developers
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link_btn">
              company
            </button>
          </li>
        </ul>

        <div className={styles.signin_btn}>
          <button className={styles.btn}>Sign In</button>
        </div>
      </div>
    </nav>
    // <header className={styles.header}>
    //   <div className={styles.logo}>
    //     <Link href="/">Home Page!</Link>
    //   </div>
    //   <nav className={styles.navigation}>
    //     <ul>
    //       <li>
    //         <Link href="/courses">All Courses</Link>
    //       </li>
    //       <li>
    //         <Link href="/contact">Contact</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default MainHeader;
