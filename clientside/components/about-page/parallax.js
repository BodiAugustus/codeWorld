import { useParallax } from 'react-scroll-parallax';
import { useRef } from 'react';
import Image from 'next/image';
import Button from '@components/ui/button';
import styles from './parallax.module.css';

function Parallax() {
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
      <div className="relative overflow-hidden">
        <div className={`${styles.img_div} flex flex-col`}>
          <h2 className="  text-white relative font-extrabold tracking-tight">
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
      <div
        ref={train.ref}
        className="absolute"
        style={{
          top: '179vh',
          right: '2vw',
        }}
      >
        <Image src="/images/javascript.png" height={350} width={400} />
      </div>
      <div ref={react.ref} className="absolute top-[200vh] left-[20vw]">
        <Image src="/images/react.png" height={400} width={400} />
      </div>
      <div ref={cloud.ref} className="absolute top-[130vh]">
        <Image src="/images/htmlCss.png" height={200} width={400} />
      </div>
    </div>
  );
}

export default Parallax;
