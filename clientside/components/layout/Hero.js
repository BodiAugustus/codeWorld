import React from 'react';
import { useGlobalContext } from 'store/context';
import styles from './Hero.module.css';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className={styles.hero} onMouseOver={closeSubmenu}>
      <div className={styles.hero_center}>
        <article className={styles.hero_info}>
          <h1>Payments Infastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ea
            vel quidem, pariatur mollitia tenetur dolores iusto quae ipsa, sit
            assumenda omnis eos. Maxime, vel.
          </p>
          <button className={styles.btn}>start now</button>
        </article>
        <article className={styles.hero_images}>
          <img src="/images/phone.svg" alt="" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
