import React from 'react';
import { useGlobalContext } from 'store/context';
import styles from './Hero.module.css';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className={styles.hero} onMouseOver={closeSubmenu}>
      <div className={styles.hero_center}>
        <article className={styles.hero_info}>
          <h1 className="font-poppins font-extrabold">
            The Future is Digital.
          </h1>
          <p>
            Set your kids up for success in the digital age by teaching them how
            to code videogames, websites, web applications and much more!
          </p>
          <button className={styles.btn}>start now</button>
        </article>
        <article className={styles.hero_images}>
          <img
            src="https://education.planeteersgame.com/wp-content/uploads/2017/05/Coding_Image_Top.jpg"
            alt=""
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
