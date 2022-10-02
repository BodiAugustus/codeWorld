import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/button';
import styles from './course-item.module.css';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowIcon from '../icons/arrow-right-icon';

function CourseItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const exploreLink = `/courses/${id}`;

  return (
    <li className={`${styles.item} `}>
      <div className="relative w-64 h-48 mt-2 ">
        <Image src={'/' + image} alt={title} layout="fill" />
      </div>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>
            <Button>
              <div className="flex">
                <span>Course Details</span>
                <span className={styles.icon}>
                  <ArrowIcon />
                </span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default CourseItem;
