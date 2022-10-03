import {
  getAllCourses,
  getCourseById,
  getFeaturedCourses,
} from '../../helpers/api-util';

import CourseSummary from '@components/course-detail/course-summary';
import CourseLogistics from '@components/course-detail/course-logistics';
import CourseContent from '@components/course-detail/course-content';
import ErrorAlert from '../../components/ui/error-alert';
import Head from 'next/head';
import Comments from '@components/input/comments';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';

function CourseDetailPage(props) {
  const { closeSubmenu } = useGlobalContext();
  const course = props.selectedCourse;
  console.log(course);
  if (!course) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{course.title}</title>

        <meta
          name="Course page"
          content="Shows all of the information for a specific coding course."
        />
      </Head>
      <Sidebar />
      <Submenu />
      <CourseSummary title={course.title} />
      <div onMouseOver={closeSubmenu}>
        <CourseLogistics
          date={course.date}
          address={course.location}
          image={course.image}
        />
        <CourseContent>
          <p>{course.description}</p>
          <p>{course.wsl}</p>
          <ul>
            <li>{course.wsl1}</li>
            <li>{course.wsl2}</li>
            <li>{course.wsl3}</li>
            <li>{course.wsl4}</li>
            <li>{course.wsl5}</li>
            <li>{course.wsl6}</li>
            <li>{course.wsl7}</li>
            <li>{course.wsl8}</li>
            <li>{course.wsl9}</li>
            <li>{course.wsl10}</li>
            <li>{course.wsl11}</li>
            <li>{course.wsl12}</li>
            <li>{course.wsl13}</li>
            <li>{course.wsl14}</li>
            <li>{course.wsl15}</li>
          </ul>
          <p className="pt-8">{course.wsd}</p>
          <ul>
            <li>{course.wsd1}</li>
            <li>{course.wsd2}</li>
            <li>{course.wsd3}</li>
            <li>{course.wsd4}</li>
            <li>{course.wsd5}</li>
          </ul>
        </CourseContent>
        <Comments courseId={course.id} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const courseId = context.params.courseId;

  const course = await getCourseById(courseId);
  // console.log(course);

  return {
    props: {
      selectedCourse: course,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const courses = await getFeaturedCourses();

  const paths = courses.map(course => ({
    params: { courseId: course.id },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

export default CourseDetailPage;
