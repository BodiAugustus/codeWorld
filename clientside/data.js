import { FaCreditCard } from 'react-icons/fa';
import { AiOutlineHtml5, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FcInfo } from 'react-icons/fc';
import { GrReactjs } from 'react-icons/gr';
import { GiMagnifyingGlass } from 'react-icons/gi';
import React from 'react';

const sublinks = [
  {
    page: 'courses',
    links: [
      {
        label: 'HTML & CSS',
        icon: (
          <div className="">
            <AiOutlineHtml5 fill="#EF5B0C" />
            <DiCss3 fill="#1F4690" />
          </div>
        ),
        url: '/courses/htmlCss',
      },
      {
        label: 'Javascript',
        icon: <SiJavascript fill="#FFEA11" />,
        url: '/courses/javascript',
      },
      {
        label: 'React',
        icon: <GrReactjs fill="skyblue" />,
        url: '/courses/react',
      },
    ],
  },
  {
    page: 'about',
    links: [
      { label: 'about', icon: <FcInfo />, url: '/about' },
      {
        label: 'FAQ',
        icon: <GiMagnifyingGlass fill="gray" />,
        url: '/faq',
      },

      {
        label: 'billing',
        icon: <FaCreditCard fill="black" />,
        url: '/billing',
      },
    ],
  },
  {
    page: 'contact',
    links: [
      {
        label: 'email',
        icon: <AiOutlineMail fill="#FEC260" />,
        url: '/contact',
      },
      {
        label: '904-599-3111',
        icon: <AiOutlinePhone fill="blue" />,
        url: '#',
      },
    ],
  },
];

export default sublinks;
