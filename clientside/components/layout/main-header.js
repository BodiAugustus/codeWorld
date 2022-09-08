import Link from 'next/link';
import styles from './main-header.module.css';
function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Home Page!</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/courses">All Courses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
