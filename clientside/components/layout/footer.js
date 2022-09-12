import { GiWorld } from 'react-icons/gi';

import Link from 'next/link';
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-sky-900 flex items-center justify-between">
      <p>{year}</p>
      <div className="flex text-base gap-5  font-bold text-white">
        <Link href="/courses">
          <a className="hover:text-emerald-500">Courses</a>
        </Link>
        <Link href="#">
          <a className="hover:text-emerald-500">About</a>
        </Link>
        <Link href="/contact">
          <a className="hover:text-emerald-500">Contact</a>
        </Link>
        <Link href="#">
          <a className="hover:text-emerald-500">FAQ</a>
        </Link>
        <Link href="#">
          <a className="hover:text-emerald-500">Billing</a>
        </Link>
      </div>

      <Link href="/">
        <a>
          <h2 className="flex gap-2 font-poppins font-bold mt-2 leading-none tracking-tight">
            <span className="text-emerald-500">Code</span>{' '}
            <GiWorld className="animate-spin-slow  text-green-500 bg-blue-600 rounded-full" />{' '}
            <span className="text-blue-600">World</span>
          </h2>
        </a>
      </Link>
    </div>
  );
}

export default Footer;
