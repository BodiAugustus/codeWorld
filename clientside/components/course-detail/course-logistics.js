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
        <h2 className="text-base lowercase tracking-tight">
          <span className="uppercase">P</span>lease confirm your class date and
          time with the <span className="capitalize">Code World</span> learning
          center before attending monthly classes at the start of each month by
          contacting us using either phone or email if you have not signed up
          for reoccuring payments
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
