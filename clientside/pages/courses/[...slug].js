import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import CourseList from '@components/courses/course-list';
import ResultsTitle from '@components/courses/results-title';
import Button from '@components/ui/button';
import ErrorAlert from '@components/ui/error-alert';
import Head from 'next/head';

function FilteredCoursesPage(props) {
  const router = useRouter();
  const [loadedCourses, setLoadedCourses] = useState();

  const filterData = router.query.slug;

  const { data, error } = useSWR(
    'https://codeworld-c17fa-default-rtdb.firebaseio.com/courses.json',
    url => fetch(url).then(res => res.json())
  );

  useEffect(() => {
    if (data) {
      const courses = [];

      for (const key in data) {
        courses.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedCourses(courses);
    }
  }, [data]);

  let pageHeadData = (
    <Head>
      <title>Filtered Courses</title>

      <meta
        name="Filtered courses page"
        content={`A list of filtered courses`}
      />
    </Head>
  );

  if (!loadedCourses) {
    return (
      <>
        {pageHeadData}
        <p>Loading classes...</p>
      </>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  pageHeadData = (
    <Head>
      <title>Filtered Courses</title>

      <meta
        name="Filtered courses page"
        content={`All courses for ${numMonth}/${numYear}`}
      />
    </Head>
  );

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2023 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>Your search settings are invalid, please use valid inputs.</p>
        </ErrorAlert>
        <Button link="/courses">Back to all classes</Button>
      </>
    );
  }

  const filteredCourses = loadedCourses.filter(course => {
    const courseDate = new Date(course.date);
    return (
      courseDate.getFullYear() === numYear &&
      courseDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredCourses || filteredCourses.length === 0) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>No classes found for those settings!</p>
        </ErrorAlert>
        <Button link="/courses">Back to all classes</Button>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      {pageHeadData}
      <ResultsTitle date={date} />
      <CourseList items={filteredCourses} />
    </>
  );
}

export default FilteredCoursesPage;

// export async function getServerSideProps(context) {
//   const { params } = context;

//   const filterData = params.slug;

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2023 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: { hasError: true },
//     };
//   }

//   const filteredCourses = await getFilteredCourses({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       courses: filteredCourses,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };
// }
