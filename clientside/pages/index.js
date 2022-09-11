import Head from 'next/head';
import { getFeaturedCourses } from '../dummy-data';
import CourseList from '@components/courses/course-list';
import NewsletterRegistration from '@components/input/newsletter-registration';
import Hero from '@components/layout/Hero';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Code World</title>

        <meta name="Main screen" content="Give your child a better future!" />
      </Head>
      <Sidebar />
      <Hero />
      <Submenu />
      <NewsletterRegistration />
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
