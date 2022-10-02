import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';
import { useState } from 'react';
import data2 from '../data2';
import Question from '@components/faq/single-question';
import revealSections from '@helpers/reveal-sections';

function FaqPage() {
  const { closeSubmenu } = useGlobalContext();
  const [questions, setQuestions] = useState(data2);
  revealSections();
  return (
    <div className="section">
      <Sidebar />
      <Submenu />

      <div className="">
        <div onMouseOver={closeSubmenu}>
          <div className={` gradient4 h-[62vh] mt-14 mb-6`}>
            <h1 className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100 pt-36 tracking-tight">
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
