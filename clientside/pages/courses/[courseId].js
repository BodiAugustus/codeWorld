//This page handles purchases

import { getCourseById, getFeaturedCourses } from '@helpers/api-util';

import CourseSummary from '@components/course-detail/course-summary';
import CourseLogistics from '@components/course-detail/course-logistics';
import CourseContent from '@components/course-detail/course-content';
import Head from 'next/head';
import Comments from '@components/input/comments';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';
import Button from '@components/ui/button';
import { checkout } from '@helpers/checkout';

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
          name="Individual Course page"
          content="Shows all of the information for a specific coding course including registration."
        />
      </Head>
      <Sidebar />
      <Submenu />
      <CourseSummary title={course.title} />
      <div
        onMouseOver={closeSubmenu}
        className="max-w-[1536px]
      md:w-[120%] lg:w-[100%]"
      >
        <CourseLogistics
          date={course.date}
          address={course.location}
          image={course.image}
          time={course.time}
        />
        <CourseContent>
          <Button
            quantity={course.quantity}
            onClick={() => {
              if (course.quantity > 0) {
                checkout({
                  lineItems: [
                    {
                      price: `${
                        course.title === 'React' && course.date === '2023-01-21'
                          ? 'price_1M56fvFSa0TezXP7TymWk59I'
                          : course.title === 'React' &&
                            course.date === '2023-01-22'
                          ? 'price_1M56gqFSa0TezXP7szqCLPnr'
                          : course.title === 'JavaScript' &&
                            course.date === '2023-01-21'
                          ? 'price_1M56hQFSa0TezXP753pRwbSJ'
                          : course.title === 'JavaScript' &&
                            course.date === '2023-01-22'
                          ? 'price_1M56i1FSa0TezXP7LFYQQIQa'
                          : course.title === 'JavaScript' &&
                            course.date === '2023-01-27'
                          ? 'price_1M56ibFSa0TezXP7lKOmnHn6'
                          : course.title === 'HTML & CSS' &&
                            course.date === '2023-01-21'
                          ? 'price_1M56j8FSa0TezXP7fCIagdfV'
                          : course.title === 'HTML & CSS' &&
                            course.date === '2023-01-22'
                          ? 'price_1M56jbFSa0TezXP7iGlU76AN'
                          : course.title === 'HTML & CSS' &&
                            course.date === '2023-02-01'
                          ? 'price_1M56kBFSa0TezXP7sgc0DDRx'
                          : 'price_1M56lUFSa0TezXP7k8dfhEOQ'
                      }`,
                      quantity: 1,
                    },
                  ],
                });
              }
            }}
          >
            {course.quantity === 0 ? 'This Class Is full' : 'Register Now!'}
          </Button>
          <p className="text-[#111] mt-8">{course.description}</p>
          <p className="text-[#111]">{course.wsl}</p>
          <ul className="font-medium">
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
          <p className="pt-8 text-[#111]">{course.wsd}</p>
          <ul className="font-medium">
            <li>{course.wsd1}</li>
            <li>{course.wsd2}</li>
            <li>{course.wsd3}</li>
            <li>{course.wsd4}</li>
            <li>{course.wsd5}</li>
          </ul>
        </CourseContent>
        <div className="text-center mt-10 mb-14 text-2xl">
          <Button
            quantity={course.quantity}
            onClick={() => {
              if (course.quantity > 0) {
                checkout({
                  lineItems: [
                    {
                      price: `${
                        course.title === 'React' && course.date === '2023-01-21'
                          ? 'price_1M56fvFSa0TezXP7TymWk59I'
                          : course.title === 'React' &&
                            course.date === '2023-01-22'
                          ? 'price_1M56gqFSa0TezXP7szqCLPnr'
                          : course.title === 'JavaScript' &&
                            course.date === '2023-01-21'
                          ? 'price_1M56hQFSa0TezXP753pRwbSJ'
                          : course.title === 'JavaScript' &&
                            course.date === '2023-01-22'
                          ? 'price_1M56i1FSa0TezXP7LFYQQIQa'
                          : course.title === 'JavaScript' &&
                            course.date === '2023-01-27'
                          ? 'price_1M56ibFSa0TezXP7lKOmnHn6'
                          : course.title === 'HTML & CSS' &&
                            course.date === '2023-01-21'
                          ? 'price_1M56j8FSa0TezXP7fCIagdfV'
                          : course.title === 'HTML & CSS' &&
                            course.date === '2023-01-22'
                          ? 'price_1M56jbFSa0TezXP7iGlU76AN'
                          : course.title === 'HTML & CSS' &&
                            course.date === '2023-02-01'
                          ? 'price_1M56kBFSa0TezXP7sgc0DDRx'
                          : 'price_1M56lUFSa0TezXP7k8dfhEOQ'
                      }`,
                      quantity: 1,
                    },
                  ],
                });
              }
            }}
          >
            {course.quantity === 0 ? 'This Class Is full' : 'Register Now!'}
          </Button>
        </div>
        {/* <Comments courseId={course.id} /> */}
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
