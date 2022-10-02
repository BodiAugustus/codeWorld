import styles from './section-six.module.css';
import revealSections from '@helpers/reveal-sections';

function SectionSix() {
  revealSections();

  return (
    <div className="grid grid-cols-2 text-center section">
      <div className="pt-32 px-10 relative">
        <span className="bg-blue-200 rounded-lg px-2 py-1 opacity-70 text-sky-600 text-sm absolute left-[12%] top-[20%]">
          iNDIVDUAL ATTENTION
        </span>
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          <span className="text-blue-600">SMALL</span> CLASS SIZES
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo
          sit repellat iusto, quisquam aut quos cum repellendus voluptates a?
          Assumenda, ut, magnam, est obcaecati laborum delectus quis odio
          perspiciatis dolore ullam quas eaque? Porro!
        </p>
        <button className="px-4 py-2 text-2xl bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 hover:scale-105 transition-all .3 linear active:bg-blue-600 active:scale-100">
          Enroll Now!
        </button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <figure>
            <img src="/images/main-img-3.webp" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
