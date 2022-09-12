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
          <h1 className="font-poppins font-extrabold tracking-tighter text-sky-700">
            The Future is Digital.
          </h1>
          <p className="text-slate-700">
            Ensure your child does not get left behind by having them learn how
            to code videogames, websites, web applications and more!
          </p>
          <Link href="/courses">
            <a
              className={`${styles.btn} bg-blue-600 text-white font-medium 
              hover:scale-105 
              hover:bg-blue-700 
              active:bg-blue-600`}
            >
              All Courses &rarr;
            </a>
          </Link>
        </article>
        <article className={styles.hero_images}>
          <img
            className={styles.phone_img}
            src="https://education.planeteersgame.com/wp-content/uploads/2017/05/Coding_Image_Top.jpg"
            alt=""
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
