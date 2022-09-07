import CourseItem from './course-item';
import styles from './course-list.module.css';

function CourseList(props) {
  const { items } = props;
  return (
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
  );
}

export default CourseList;
