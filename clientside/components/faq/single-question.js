import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from './single-question.module.css';
const Question = ({ title, info }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <article className={styles.question}>
      <header>
        <h4 className="font-bold">{title}</h4>
        {seeMore ? (
          <button onClick={() => setSeeMore(!seeMore)} className={styles.btn}>
            <AiOutlineMinus fill="red" />
          </button>
        ) : (
          <button onClick={() => setSeeMore(!seeMore)} className={styles.btn}>
            <AiOutlinePlus fill="blue" />
          </button>
        )}
      </header>
      <p>{seeMore && info}</p>
    </article>
  );
};

export default Question;
