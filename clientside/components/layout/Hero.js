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
          <h1 className="font-poppins font-extrabold tracking-tighter text-cyan-600">
            The Future is Digital.
          </h1>
          <p className="text-cyan-700">
            Ensure your child doesn&apos;t get left behind by letting them learn
            how to code webpages, videogames, web applications and more!
          </p>
          <div className="inline-block hover:scale-110 transition ease-linear delay-300 active:scale-100">
            <Link href="/courses">
              <a
                className={`${styles.btn} bg-cyan-600 text-white font-medium 
             
              hover:bg-cyan-700 
              active:bg-cyan-600`}
              >
                All Courses &rarr;
              </a>
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
