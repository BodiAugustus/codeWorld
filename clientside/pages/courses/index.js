import { useRouter } from 'next/router';
import { getAllCourses } from '../../helpers/api-util';
import CourseList from '@components/courses/course-list';
import CoursesSearch from '@components/courses/courses-search';
import Head from 'next/head';

function AllCoursesPage(props) {
  const courses = props.courses;
  const router = useRouter();

  const handleFindCourses = (year, month) => {
    const fullPath = `/courses/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <div>
      <Head>
        <title>Courses</title>

        <meta
          name="Courses page"
          content="Shows all of the offered coding courses."
        />
      </Head>
      <CoursesSearch onSearch={handleFindCourses} />
      <CourseList items={courses} />
    </div>
  );
}

export async function getStaticProps() {
  const courses = await getAllCourses();

  return {
    props: {
      courses: courses,
    },
    revalidate: 30,
  };
}

export default AllCoursesPage;
