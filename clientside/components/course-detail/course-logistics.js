//this is the component for the /courses/COURSENAME page

import Image from 'next/image';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './course-logistics.module.css';
import { BsClock } from 'react-icons/bs';

function CourseLogistics(props) {
  const { date, address, image, imageAlt, time } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  // const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image
          src={`/${image}`}
          alt={imageAlt}
          layout="responsive"
          height={200}
          width={200}
        />
      </div>

      <ul className={classes.list}>
        <h2
          className="text-base lowercase tracking-tight
        xxxs:px-2 xxxs:text-center
        md:px-0 md:text-left"
        >
          <span className="uppercase">P</span>lease be aware that students must
          bring their own personal laptops to class for each session.
          <span className="capitalize">&nbsp;Code World</span>{' '}
          <strong>does not</strong> provide laptops for students use.
        </h2>
        <div className="flex">
          <LogisticsItem icon={DateIcon} />
          <time className="text-[#aefff8] text-2xl">{humanReadableDate}</time>
        </div>

        <div className="flex">
          {' '}
          <LogisticsItem icon={BsClock} />
          <address className="text-[#aefff8] text-2xl">{time}</address>
        </div>
      </ul>
    </section>
  );
}

export default CourseLogistics;
