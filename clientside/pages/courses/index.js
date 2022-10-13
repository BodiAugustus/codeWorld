import { useRouter } from 'next/router';
import { getAllCourses } from '../../helpers/api-util';
import CourseList from '@components/courses/course-list';
import CoursesSearch from '@components/courses/courses-search';
import Head from 'next/head';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';

function AllCoursesPage(props) {
  const courses = props.courses;
  const router = useRouter();
  const { closeSubmenu } = useGlobalContext();

  const handleFindCourses = (year, month) => {
    const fullPath = `/courses/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <div>
      <Head>
        <title>Courses</title>

        <meta
          name="All Courses page"
          content="Shows all of the currently offered coding courses with their dates and times."
        />
      </Head>
      <Sidebar />
      <Submenu />
      <div
        onMouseOver={closeSubmenu}
        className="max-w-[1536px]
      md:w-[120%] lg:w-full"
      >
        <CoursesSearch
          onMouseOver={closeSubmenu}
          onSearch={handleFindCourses}
        />
        <CourseList items={courses} />
      </div>
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
