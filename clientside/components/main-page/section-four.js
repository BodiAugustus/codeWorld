import styles from './section-four.module.css';

function SectionFour() {
  return (
    <div className="grid grid-cols-2 text-center">
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <figure>
            <img
              src="https://www.preface.ai/blog/wp-content/uploads/2021/04/coding-kids-preface1-scaled.jpg"
              alt=""
              srcset=""
            />
          </figure>
        </div>
      </div>
      <div className="pt-32 px-10">
        <span className="bg-blue-200 rounded-lg px-2 py-1 opacity-70 text-sky-600 text-sm mr-96 ">
          AGES 7 TO 14
        </span>
        <h2 className="font-poppins font-extrabold mt-4">
          FROM BEGINNER TO <span className="text-blue-600">EXPERT</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo
          sit repellat iusto, quisquam aut quos cum repellendus voluptates a?
          Assumenda, ut, magnam, est obcaecati laborum delectus quis odio
          perspiciatis dolore ullam quas eaque? Porro!
        </p>
        <button className="px-4 py-2 text-2xl bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 hover:scale-105 transition-all .3 linear active:bg-blue-600 active:scale-100">
          Learn More &rarr;
        </button>
      </div>
    </div>
  );
}

export default SectionFour;
