import CourseItem from './course-item';
import styles from './course-list.module.css';
import revealSections from '@helpers/reveal-sections';

function CourseList(props) {
  revealSections();
  const { items } = props;
  return (
    <div className="section">
      <h2 className="font-poppins tracking-tight text-center font-extrabold max-w-[700px] mx-auto -mb-14 mt-[15vh]">
        CURRENT COURSE OFFERINGS
      </h2>
      <ul className={styles.list}>
        {items.map(event => (
          <CourseItem
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            image={event.image}
            location={event.location}
          />
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
