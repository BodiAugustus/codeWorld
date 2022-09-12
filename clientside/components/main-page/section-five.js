import styles from './section-five.module.css';

function SectionFive() {
  return (
    <div className="relative overflow-hidden">
      <div className={`${styles.img_div} flex flex-col`}>
        <h2 className="  text-white relative font-extrabold ">
          JOIN CODE WORLD TODAY
        </h2>
        <p className="relative text-slate-300 text-xl">
          Unlock your childs path to a brighter future!
        </p>
        <button className="px-4 py-4 cursor-pointer bg-emerald-600 rounded-lg font-bold  text-white text-xl relative transition-all .3 linear hover:bg-emerald-500 hover:scale-105 active:bg-emerald-600 active:scale-100">
          ENROLL NOW
        </button>
      </div>
    </div>
  );
}

export default SectionFive;
