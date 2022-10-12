import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';
import { useState } from 'react';
import data2 from '../data2';
import Question from '@components/faq/single-question';
import revealSections from '@helpers/reveal-sections';
import Head from 'next/head';

function FaqPage() {
  const { closeSubmenu } = useGlobalContext();
  const [questions, setQuestions] = useState(data2);
  revealSections();
  return (
    <div className="section">
      <Head>
        <title>FAQs</title>

        <meta
          name="FAQs page"
          content="Provides answers to some of the most commonly asked questions about Code World."
        />
      </Head>
      <Sidebar />
      <Submenu />

      <div
        className="overflow-hidden 
      xxxs:-mt-20
      xxs:-mt-16
      xs:-mt-24
      small:-mt-28
      md:-mt-20 md:w-[120%]
      lg:w-[100%] lg:-mt-0"
      >
        <div onMouseOver={closeSubmenu}>
          <div
            className={` gradient4  md:mb-6
            xxxs:-mt-0  xxxs:mb-0
          md:mt-14 h-[62vh]
          `}
          >
            <h1
              className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100 tracking-tight
              xxxs:pt-32 xxxs:text-4xl
              xs:pt-40
            md:pt-60 md:text-6xl
            lg:pt-32"
            >
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </div>
          <section className="pt-4 pb-10 section">
            <h2></h2>
            {questions.map(question => {
              return <Question key={question.id} {...question} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
