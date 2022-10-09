import Link from 'next/link';
import React from 'react';
import { useGlobalContext } from 'store/context';
import styles from './Hero.module.css';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className={styles.hero} onMouseOver={closeSubmenu}>
      <div className={styles.hero_center}>
        <article className={styles.hero_info}>
          <h1 className="font-poppins font-extrabold tracking-tighter text-[#002E94]">
            The Future is Digital.
          </h1>
          <p className="text-[#1C3879]">
            Ensure your child isn&apos;t left behind by letting them learn how
            to code websites, online games, real-world applications and more!
          </p>
          <div className="inline-block ">
            <Link href="/courses">
              <button
                className={`${styles.btn} bg-blue-500 text-white 
             
              hover:bg-blue-400 
              active:bg-blue-600 font-extrabold hover:scale-105 active:scale-100`}
              >
                All Courses &rarr;
              </button>
            </Link>
          </div>
        </article>
        <article className={styles.hero_images}>
          <img src="/images/hero-bg.png" alt="" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
