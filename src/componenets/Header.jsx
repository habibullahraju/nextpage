import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
    return (
        <div className=' flex justify-between items-center py-4 bg-gray-100 px-5'>
            <Link to="/" className='inline-flex flex-grow items-center'> 
                <BoltIcon className='h-5 w-5 text-blue-500'></BoltIcon>
                <span className='ml-1 text-xl text-gray-800 font-bold'>NextPage</span>
            </Link>
            <ul className='items-center hidden space-x-8 lg:flex '>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/books'
              className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}
            >
              About us
            </NavLink>
          </li>
        </ul>
        <button onClick={()=> setIsMenuOpen(!isMenuOpen)}><Bars3BottomRightIcon className='h-5 w-5 lg:hidden text-blue-500'></Bars3BottomRightIcon></button>
        {/* mobile munu */}
        <div>
        {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        </div>
    );
};

export default Header;