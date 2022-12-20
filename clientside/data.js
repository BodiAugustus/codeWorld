import { FaCreditCard, FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineHtml5, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr';
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
        label: 'Address',
        icon: <FaMapMarkedAlt fill="#2B3467" />,
        url: 'https://www.google.com/search?q=code+world+bali&biw=1280&bih=648&sxsrf=ALiCzsaKc7b5qCuEMWz7dSegpk5Pbyt4ow%3A1671433450188&ei=6gygY82NC_ea4t4PxL268AI&oq=code+world&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgQIIxAnMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIHCAAQgAQQCjIFCAAQgAQ6BwgjEOoCECc6DAgAEOoCELQCEEMYAToSCC4QxwEQ0QMQ6gIQtAIQQxgBOgQIABBDOhAILhCxAxCDARDHARDRAxBDOgsIABCABBCxAxCDAToKCAAQsQMQgwEQQzoNCC4QsQMQxwEQ0QMQQzoICAAQgAQQsQM6CwguEIAEELEDENQCOgUIABCRAjoKCC4QsQMQ1AIQQzoNCAAQgAQQsQMQgwEQCjoKCAAQgAQQsQMQCkoECEEYAEoECEYYAVCVC1iEGWCLJWgBcAF4AIABhwGIAccIkgEDMi44mAEAoAEBsAEUwAEB2gEGCAEQARgB&sclient=gws-wiz-serp',
      },
    ],
  },
];

export default sublinks;
