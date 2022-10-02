import Image from 'next/image';

function SectionTwo() {
  return (
    <div className=" grid grid-cols-[1fr_2fr_1fr] mx-10">
      <img
        className="h-[100%]"
        src="https://img.freepik.com/premium-vector/child-writes-program-code-children-robotics-programming-vector-illustration-isolated_414360-895.jpg?w=2000"
        alt=""
      />
      <div className="text-center px-3 pt-16 font-poppins">
        <h2 className="font-extrabold tracking-tight">
          <span className="text-blue-600">LEARN</span> TO CODE!
        </h2>
        <p className="text-lg w-[80%] text-center mx-auto">
          At our digital learning center, kids learn to code in a fun, safe, and
          inspiring environment, with a project-based curriculum that they love.
          Parents love it too, because their kids make real progress and gain
          valuable skills while having a great time. Everyone wins at Code
          World!
        </p>
      </div>
      <img
        src="https://us.123rf.com/450wm/yusufdemirci/yusufdemirci2004/yusufdemirci200400185/144704287-using-technology-for-education-or-business.jpg?ver=6"
        alt=""
        className="h-[100%]"
      />
    </div>
  );
}

export default SectionTwo;
