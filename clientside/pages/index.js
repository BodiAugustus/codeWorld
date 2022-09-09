import Head from 'next/head';

import { getFeaturedCourses } from '../dummy-data';
import CourseList from '@components/courses/course-list';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Code World</title>

        <meta name="Main screen" content="Give your child a better future!" />
      </Head>
      <CourseList items={props.courses} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredCourses = await getFeaturedCourses();
  return {
    props: {
      courses: featuredCourses,
    },
    revalidate: 30,
  };
}

export default HomePage;
