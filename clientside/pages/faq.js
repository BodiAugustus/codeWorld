import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';
import { useState } from 'react';
import data2 from '../data2';
import Question from '@components/faq/single-question';

function FaqPage() {
  const { closeSubmenu } = useGlobalContext();
  const [questions, setQuestions] = useState(data2);

  return (
    <div className="">
      <Sidebar />
      <Submenu />

      <div>
        <div onMouseOver={closeSubmenu}>
          <div className={` gradient2 h-[52vh] mb-6`}>
            <h1 className="text-center max-w-[70%] mx-auto font-poppins font-extrabold text-slate-100 pt-24">
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </div>
          <section className="pt-4 pb-10 ">
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
