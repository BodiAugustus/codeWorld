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

function CourseDetailPage(props) {
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
          content="Shows all of the information for a specific course."
        />
      </Head>
      <CourseSummary title={course.title} />
      <CourseLogistics
        date={course.date}
        address={course.location}
        image={course.image}
      />
      <CourseContent>
        <p>{course.description}</p>
      </CourseContent>
    </>
  );
}

export async function getStaticProps(context) {
  const courseId = context.params.courseId;

  const course = await getCourseById(courseId);
  console.log(course);

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
