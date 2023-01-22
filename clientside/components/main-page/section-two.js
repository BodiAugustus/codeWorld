import { GiLaptop, GiTeacher } from 'react-icons/gi';

function SectionTwo() {
  return (
    <div
      className=" grid mx-10 
     xxxs::grid-cols-1 xxxs:h-[95vh]
     xxs:-mt-5 xxs:h-[105vh]
     xs:-mt-4 xs:h-[100vh]
     md:grid-cols-[1fr_2fr_1fr] md:-mb-28 md:h-[52vh] md:items-center md:w-[120%] md:mx-0
     lg:h-[42vh] lg:mb-10 lg:w-[100%] lg:mx-0
     2xl:w-[70%] 2xl:mx-auto
     
     "
    >
      <GiLaptop
        className="mx-auto  fill-blue-600
        text-[14rem] 

        md:text-[10rem]
        lg:mt-14 lg:text-[14rem]"
      />
      <div
        className="text-center px-3 font-poppins
        xxxs:pt-4
        xs:-mt-14 
      md:pt-0 md:px-0
      lg:pt-16 lg:px-3"
      >
        <h2
          className="font-extrabold tracking-tight
        xxxs:text-2xl
        xs:mt-6
        
        md:text-4xl md:mt-0"
        >
          <span className="text-blue-600">LEARN</span> TO{' '}
          <span className="text-emerald-500">CODE!</span>
        </h2>
        <p
          className="text-lg  text-center mx-auto
          xxxs:mb-1
          xs:-mb-6


        md:w-[80%] md:mb-0
        xl:-mb-10
        
        "
        >
          At our in-person digital learning center located in Sanur, Bali, kids
          learn to code in a fun, safe, and inspiring environment with an actual
          instructor using a project-based curriculum that they love. Parents
          love it too, because their kids make real progress and gain valuable
          skills while having a great time. Everybody wins at Code World!
        </p>
      </div>
      <GiTeacher
        className="text-[14rem] mx-auto  fill-emerald-500
        md:text-[10rem]
        lg:mt-12 lg:text-[14rem]
        
        "
      />
    </div>
  );
}

export default SectionTwo;
