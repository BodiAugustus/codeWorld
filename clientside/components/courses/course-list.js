import CourseItem from './course-item';
import styles from './course-list.module.css';
import revealSections from '@helpers/reveal-sections';

function CourseList(props) {
  revealSections();

  const { items } = props;
  return (
    <div
      className="section font-poppins text-center font-extrabold max-w-[700px] mx-auto 
      xxxs:mt-[5vh] 
    md:mt-[5vh]
    lg:mt-[15vh]
    2xl:mt-[10vh] "
    >
      <h2
        className="tracking-tight -mb-16
      xxxs:text-2xl
      md:text-4xl"
      >
        UPCOMING CLASSES
      </h2>

      <ul className={styles.list}>
        {items.map(event =>
          event.isFeatured ? (
            <CourseItem
              isFeatured={event.isFeatured}
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              image={event.image}
              location={event.location}
              time={event.time}
            />
          ) : null
        )}
      </ul>
    </div>
  );
}

export default CourseList;
