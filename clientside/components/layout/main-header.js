import Link from 'next/link';
import { useGlobalContext } from 'store/context';

import { FaBars } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
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
        <div className={`${styles.nav_header} items-center`}>
          <h2 className="flex gap-2 font-poppins font-bold mt-2 leading-none tracking-tight">
            <span className="text-emerald-500">Code</span>{' '}
            <GiWorld className="animate-spin-slow  text-green-500 bg-blue-600 rounded-full" />{' '}
            <span className="text-blue-600">World</span>
          </h2>
          <button
            className={`${styles.btn} ${styles.toggle_btn}`}
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className={`${styles.nav_links} text-emerald-500 font-bold `}>
          <li className="hover:text-emerald-300">
            <button onMouseOver={displaySubmenu} className="link_btn">
              courses
            </button>
          </li>
          <li className="hover:text-emerald-300">
            <button onMouseOver={displaySubmenu} className="link_btn">
              about
            </button>
          </li>
          <li className="hover:text-emerald-300">
            <button onMouseOver={displaySubmenu} className="link_btn">
              contact
            </button>
          </li>
        </ul>

        <div className={styles.signin_btn}>
          <button
            className={`${styles.btn} bg-sky-600 hover:bg-sky-700 active:bg-sky-600`}
          >
            Request Info
          </button>
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
