import { useRef } from 'react';

import Button from '../ui/button';
import styles from './course-search.module.css';

function CoursesSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <>
      <h2
        className=" font-extrabold font-poppins text-center tracking-tight
        xxxs:-mt-10 xxxs:text-2xl
      md:mt-24 md:mb-6 md:text-4xl"
      >
        CHECK CLASS SCHEDULE
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="year">Year</label>
            <select
              name=""
              id="year"
              ref={yearInputRef}
              className="outline-none"
            >
              <option value="2023">2023</option>
            </select>
          </div>
          <div className={styles.control}>
            <label htmlFor="month">Month</label>
            <select
              className="outline-none"
              name=""
              id="month"
              ref={monthInputRef}
            >
              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">Mar</option>
              <option value="4">Apr</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">Aug</option>
              <option value="9">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
          </div>
        </div>

        <Button>Find Classes</Button>
      </form>
    </>
  );
}

export default CoursesSearch;
