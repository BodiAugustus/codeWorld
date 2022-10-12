import { useParallax } from 'react-scroll-parallax';
import { useRef } from 'react';
import Image from 'next/image';
import revealSections from '@helpers/reveal-sections';
import styles from './parallax.module.css';
import Link from 'next/link';

function Parallax() {
  revealSections();
  const target = useRef(null);
  const train = useParallax({
    speed: 500,
    targetElement: target.current,
  });

  const cloud = useParallax({
    speed: 200,
    targetElement: target.current,
  });
  const react = useParallax({
    speed: 200,
    targetElement: target.current,
  });
  return (
    <div ref={target} className="w-[98vw] ">
      <div className="relative overflow-hidden section">
        <div className={`${styles.img_div} flex flex-col`}>
          <h2
            className="  text-white relative font-extrabold tracking-tight text-center
          "
          >
            JUMP START YOUR CHILD&apos;S FUTURE
          </h2>
          <p
            className="relative text-slate-100 text-xl text-center 
          xxxs:w-[90%]
          md:w-[70%]"
          >
            Kids learn to code through our engaging project-based curriculum
            that boosts self-confidence and teaches teamwork, logic, and problem
            solving. They gain vital skills while having a blast. That's the
            Code World way!
          </p>
          <Link href="/courses">
            <button className="px-4 py-4 cursor-pointer bg-emerald-400 rounded-lg font-bold  text-white text-xl relative transition-all .3 linear hover:bg-emerald-500 hover:scale-105 active:bg-emerald-600 active:scale-100">
              ENROLL NOW
            </button>
          </Link>
        </div>
      </div>
      <div
        ref={train.ref}
        className="absolute 
      xxxs:top-[100vh] xxxs:right-[2vw]
      md:top-[119vh] md:right-[2vw]"
      >
        <Image src="/images/javascript.png" height={350} width={400} />
      </div>
      <div
        ref={react.ref}
        className="absolute 
      xxxs:top-[180vh] xxxs:left-[10vw]
      md:top-[200vh] md:left-[20vw]"
      >
        <Image src="/images/react.png" height={400} width={400} />
      </div>
      <div
        ref={cloud.ref}
        className="absolute 
      xxxs:top-[100vh]
      md:top-[130vh]"
      >
        <Image src="/images/htmlCss.png" height={200} width={400} />
      </div>
    </div>
  );
}

export default Parallax;
