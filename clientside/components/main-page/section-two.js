import Image from 'next/image';

function SectionTwo() {
  return (
    <div className="bg-red-200 grid grid-cols-[1fr_2fr_1fr]">
      <img
        src="https://media.istockphoto.com/vectors/little-children-studying-at-classroom-vector-id1209059688?k=20&m=1209059688&s=612x612&w=0&h=r8ACTyd2nKQnxNqprDHNW4jLeOJ3bqIod5GDf6v4i5A="
        alt=""
        srcset=""
      />
      <div className="text-center px-3 pt-16 font-poppins">
        <h2 className="font-extrabold">Learn to code!</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          corporis provident atque quod eos assumenda maxime autem quasi
          nesciunt qui veniam laboriosam voluptatem, eligendi reprehenderit!
        </p>
      </div>
      <img
        src="https://us.123rf.com/450wm/yusufdemirci/yusufdemirci2004/yusufdemirci200400185/144704287-using-technology-for-education-or-business.jpg?ver=6"
        alt=""
        srcset=""
        className="h-[100%]"
      />
    </div>
  );
}

export default SectionTwo;
