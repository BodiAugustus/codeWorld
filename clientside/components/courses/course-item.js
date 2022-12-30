import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/button';
import styles from './course-item.module.css';
import DateIcon from '../icons/date-icon';
// import AddressIcon from '../icons/address-icon';
import ArrowIcon from '../icons/arrow-right-icon';
import { BsClock, BsFillPeopleFill } from 'react-icons/bs';

function CourseItem(props) {
  const { title, image, date, location, id, time, age } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // const formattedAddress = location.replace(', ', '\n');

  const exploreLink = `/courses/${id}`;

  return (
    <li className={`${styles.item} `}>
      <div
        className="relative w-64 h-48 mt-2 
      xs:mx-auto"
      >
        <Image src={'/' + image} alt={title} layout="fill" />
      </div>
      <div className={styles.content}>
        <div className={`${styles.summary}`}>
          <h2 className="tracking-tight">{title}</h2>
          <div
            className={`${styles.date} xxxs:justify-center
          md:justify-start`}
          >
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div
            className={`${styles.address} xxxs:justify-center
          md:justify-start`}
          >
            <BsClock />
            <address>{time}</address>
          </div>
          <div
            className={`${styles.address} xxxs:justify-center xxxs:-mt-2
          md:justify-start`}
          >
            <BsFillPeopleFill />
            <address>{age}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>
            <Button>
              <div
                className="flex
              xs:justify-center"
              >
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
