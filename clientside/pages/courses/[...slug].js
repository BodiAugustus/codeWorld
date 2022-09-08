import { useRouter } from 'next/router';
import { getFilteredCourses } from '../../dummy-data';
import CourseList from '@components/courses/course-list';
import ResultsTitle from '@components/courses/results-title';
import Button from '@components/ui/button';
import ErrorAlert from '@components/ui/error-alert';

function FilteredCoursesPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading classes...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2023 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Your search settings are invalid, please use valid inputs.</p>
        </ErrorAlert>
        <Button link="/courses">Back to all classes</Button>
      </>
    );
  }

  const filteredCourses = getFilteredCourses({
    year: numYear,
    month: numMonth,
  });

  if (!filteredCourses || filteredCourses.length === 0) {
    return (
      <>
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
      <ResultsTitle date={date} />
      <CourseList items={filteredCourses} />
    </>
  );
}

export default FilteredCoursesPage;
