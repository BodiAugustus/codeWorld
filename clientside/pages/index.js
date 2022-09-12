import Head from 'next/head';
import { getFeaturedCourses } from '../helpers/api-util';
import CourseList from '@components/courses/course-list';
import NewsletterRegistration from '@components/input/newsletter-registration';
import Hero from '@components/layout/Hero';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import SectionTwo from '@components/main-page/section-two';
import SectionThree from '@components/main-page/section-three';
import SectionFour from '@components/main-page/section-four';
import SectionFive from '@components/main-page/section-five';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Code 🌎 World</title>

        <meta name="Main screen" content="Give your child a head start!" />
      </Head>

      <Sidebar />
      <Hero />
      <Submenu />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
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
