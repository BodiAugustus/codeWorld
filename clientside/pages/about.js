import Parallax from '@components/about-page/parallax';
import SectionEight from '@components/about-page/section-eight';
import SectionFive from '@components/about-page/section-five';
import Head from 'next/head';
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
      <Head>
        <title>About</title>

        <meta
          name="About page"
          content="Gives more information about what Code World offers and how to sign up for classes."
        />
      </Head>
      <Sidebar />
      <Submenu />
      <div onMouseOver={closeSubmenu}>
        <div
          className={`gradient   font-poppins 
          xxxs:-mt-20  xxxs:-mb-5
          xxs:-mt-16
          xs:-mt-24
          small:-mt-28
         h-[62vh] md:mb-6
        md:-mt-6 md:w-[120%]
      lg:w-[100%] lg:mt-14`}
        >
          <h1
            className="text-center max-w-[70%] mx-auto font-extrabold text-slate-100 tracking-tighter mb-8
          xxxs:pt-24
          xs:pt-40
          md:pt-60 md:text-6xl
            lg:pt-28"
          >
            ABOUT
          </h1>
          <p
            className="mx-auto text-center text-lg text-yellow-50
          xxxs:px-6 xxxs:-mt-4
          md:px-0 md:-mt-0"
          >
            Learn how to code while making websites, games, and having fun!
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
