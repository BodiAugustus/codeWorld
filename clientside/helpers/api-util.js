export async function getAllCourses() {
  const response = await fetch(
    'https://codeworld-c17fa-default-rtdb.firebaseio.com/courses.json'
  );

  const data = await response.json();

  const courses = [];

  for (const key in data) {
    courses.push({
      id: key,
      ...data[key],
    });
  }
  // console.log(courses);
  return courses;
}

export async function getFeaturedCourses() {
  const allCourses = await getAllCourses();
  return allCourses.filter(course => course.isFeatured);
}

export async function getCourseById(id) {
  const allCourses = await getAllCourses();

  return allCourses.find(course => course.id === id);
}

export async function getFilteredCourses(dateFilter) {
  const { year, month } = dateFilter;

  const allCourses = await getAllCourses();

  let filteredCourses = allCourses.filter(course => {
    const courseDate = new Date(course.date);
    return (
      courseDate.getFullYear() === year && courseDate.getMonth() === month - 1
    );
  });

  return filteredCourses;
}
