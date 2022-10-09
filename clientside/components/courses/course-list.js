import CourseItem from './course-item';
import styles from './course-list.module.css';
import revealSections from '@helpers/reveal-sections';

function CourseList(props) {
  revealSections();
  const { items } = props;
  return (
    <div className="section font-poppins text-center font-extrabold max-w-[700px] mx-auto  mt-[15vh] ">
      <h2 className="tracking-tight -mb-16">UPCOMING CLASSES</h2>

      <ul className={styles.list}>
        {items.map(event => (
          <CourseItem
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            image={event.image}
            location={event.location}
            time={event.time}
          />
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
