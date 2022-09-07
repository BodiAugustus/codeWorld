import { getFeaturedCourses } from '../dummy-data';
import CourseList from '../components/courses/course-list';

function HomePage() {
  const featuredCourses = getFeaturedCourses();
  return (
    <div>
      <CourseList items={featuredCourses} />
    </div>
  );
}

export default HomePage;
