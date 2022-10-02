import Parallax from '@components/about-page/parallax';
import SectionEight from '@components/about-page/section-eight';
import SectionFive from '@components/about-page/section-five';

import SectionFour from '@components/about-page/section-four';
import SectionNine from '@components/about-page/section-nine';
import SectionSeven from '@components/about-page/section-seven';
import SectionTwo from '@components/about-page/section-two';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';

function AboutPage() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div>
      <Sidebar />
      <Submenu />
      <div onMouseOver={closeSubmenu}>
        <div className={`gradient h-[80vh] mb-6 font-poppins`}>
          <h1 className="text-center max-w-[70%]  mx-auto  font-extrabold text-slate-100 tracking-tighter pt-52 mb-8">
            ABOUT
          </h1>
          <p className="mx-auto text-center text-lg text-yellow-50">
            Learn to code while making websites, games, and having fun!
          </p>
        </div>
      </div>
      <SectionTwo />
      <Parallax />
      <SectionFour />
      <SectionFive />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
    </div>
  );
}

export default AboutPage;
