import styles from './section-two.module.css';
import revealSections from '@helpers/reveal-sections';
function SectionTwo() {
  revealSections();
  return (
    <div className="grid grid-cols-2 text-center section">
      <div className="pt-24 px-10 ">
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          KIDS HAVE <span className="text-blue-600"> FUN,</span> PARENTS SEE
          RESULTS
        </h2>
        <p className="w-[80%] mx-auto text-lg">
          At our learning center, kids learn to code while building their own
          projects. They gain problem solving, critical thinking, and STEM
          skills in a fun, safe, and inspiring environment.
        </p>
        <p className="w-[80%] mx-auto text-lg">
          Far from being just another boring class, our lessons keep students
          constantly active and engaged so that they can both learn and have fun
          at the same time!
        </p>
      </div>
      <div className={styles.wrapper}>
        <div>
          <figure>
            <img className="rounded-lg" src="/images/aboutimg1.jpg" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
