import Router, { useRouter } from 'next/router';
import { getAllCourses } from '../../dummy-data';
import CourseList from '@components/courses/course-list';
import CoursesSearch from '@components/courses/courses-search';

function AllCoursesPage() {
  const courses = getAllCourses();
  const router = useRouter();

  const handleFindCourses = (year, month) => {
    const fullPath = `/courses/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <div>
      <CoursesSearch onSearch={handleFindCourses} />
      <CourseList items={courses} />
    </div>
  );
}

export default AllCoursesPage;
