import React from 'react';

import { Link } from 'react-scroll';

import { navData } from '../data';

const Nav = ({ nav, setNav }) => {
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-4'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <Link
                onClick={() => setNav(!nav)}
                to={item.name}
                activeClass='active'
                smooth='true'
                duration={1300}
                offset={-100}
                className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-300'
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
