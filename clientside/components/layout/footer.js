import { GiWorld } from 'react-icons/gi';

import Link from 'next/link';
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div
      className="bg-sky-900 items-center justify-between 
     xxxs:flex-col xxxs:pt-3
    flex md:h-32 md:flex-row md:pt-0 md:w-[120%]
    lg:w-[100%]
    2xl:max-w-[1536px]"
    >
      <Link href="/" className="">
        <a
          className="md:ml-5
        "
        >
          <h2
            className="flex gap-2 font-poppins font-bold mt-2 leading-none tracking-tight
          "
          >
            <span className="text-emerald-500">Code</span>{' '}
            <GiWorld className="animate-spin-slow  text-green-500 bg-blue-600 rounded-full" />{' '}
            <span className="text-blue-600">World</span>
          </h2>
        </a>
      </Link>
      <div className="flex flex-col text-center ">
        <div
          className="flex  mt-1 text-base font-bold text-white
        xxxs:gap-3
      md:gap-5 md:mr-5
      
    "
        >
          <Link href="/courses">
            <a className="hover:text-emerald-500">Courses</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-emerald-500">About</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-emerald-500">Contact</a>
          </Link>
          <Link href="/faq">
            <a className="hover:text-emerald-500">FAQ</a>
          </Link>
          <Link href="/billing">
            <a className="hover:text-emerald-500">Billing</a>
          </Link>
        </div>
      </div>

      <div className="md:mr-5 flex flex-col justify-center items-center ">
        <p className="m-0 mt-3 text-emerald-500">
          Code World Bali &#169; {year}
        </p>
        <p className="text-emerald-500 mb-0">Jl. Danau Tondano No. 53 A</p>
        <p className="text-emerald-500">Sanur, Bali, 80027</p>
      </div>
    </div>
  );
}

export default Footer;
