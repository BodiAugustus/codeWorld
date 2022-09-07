import { useRouter } from 'next/router';
import { getCourseById } from '../../dummy-data';
import CourseSummary from '../../components/course-detail/course-summary';
import CourseLogistics from '../../components/course-detail/course-logistics';
import CourseContent from '../../components/course-detail/course-content';

function CourseDetailPage() {
  //to enable router object with query prop
  const router = useRouter();

  const courseId = router.query.courseId;
  const course = getCourseById(courseId);

  if (!course) {
    return <p>No course found, check back later!</p>;
  }
  return (
    <>
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

export default CourseDetailPage;
