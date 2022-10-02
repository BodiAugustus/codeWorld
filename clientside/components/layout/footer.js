import { GiWorld } from 'react-icons/gi';

import Link from 'next/link';
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-sky-900 flex items-center justify-between h-28">
      <Link href="/">
        <a className="ml-5">
          <h2 className="flex gap-2 font-poppins font-bold mt-2 leading-none tracking-tight">
            <span className="text-emerald-500">Code</span>{' '}
            <GiWorld className="animate-spin-slow  text-green-500 bg-blue-600 rounded-full" />{' '}
            <span className="text-blue-600">World</span>
          </h2>
        </a>
      </Link>
      <div className="flex text-base gap-5  font-bold text-white mr-5">
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

      <div className="mr-5">
        <p className="m-0 mt-3">Code World &#169; {year}</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
