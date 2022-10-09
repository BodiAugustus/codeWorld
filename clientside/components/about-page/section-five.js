import styles from './section-two.module.css';
import revealSections from '@helpers/reveal-sections';
function SectionFive() {
  revealSections();
  return (
    <div className="grid grid-cols-2 text-center section">
      <div className="pt-16 px-10">
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          INVEST IN THEIR
          <span className="text-blue-600"> FUTURE</span>
        </h2>
        <p className="text-lg w-[70%] mx-auto">
          Technology is advancing at an incredible rate, and we're just getting
          started. Code World believes that there&apos;s never been a more
          exciting time to advance our culture - starting with our youngest
          ones. Every kid deserves the chance to unlock their innate, unlimited
          capacity to learn.
        </p>
        <p className="text-lg w-[70%] mx-auto">
          Whether or not they pursue coding as a career, we want to provide kids
          with the skills that will help them more easily pursue their dreams in
          the digital age.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div>
          <figure>
            <img className="rounded-lg" src="/images/aboutimg3.jpg" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
