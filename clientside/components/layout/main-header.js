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
    <div className={styles.container}>
      <nav className={styles.nav} onMouseOver={handleSubmenu}>
        <div className={styles.nav_center}>
          <div className={`${styles.nav_header} items-center`}>
            <Link href="/">
              <a>
                <h2 className="flex gap-2 font-poppins font-bold mt-2 leading-none tracking-tight">
                  <span className="text-emerald-500">Code</span>{' '}
                  <GiWorld className="animate-spin-slow  text-green-500 bg-blue-600 rounded-full" />{' '}
                  <span className="text-blue-600">World</span>
                </h2>
              </a>
            </Link>
            <button
              className={`${styles.btn2} ${styles.toggle_btn}`}
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
            <Link href="/about">
              <button
                className={`${styles.btn} bg-sky-500 hover:bg-sky-400 active:bg-sky-600 active:text-white`}
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#083AA9"
          fillOpacity="1"
          d="M0,192L80,170.7C160,149,320,107,480,117.3C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <svg
        className={styles.svg2}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,149.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
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
