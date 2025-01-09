import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import SearchBlog from "../pages/blogs/SearchBlog.jsx";
import { logout } from '../../src/redux/features/auth/authSlice.js';

const navlists = [
  { name: 'Travel', link: "" },
  { name: 'Technology', link: "" },
  { name: 'Crypto Merkets', link: "" },
  { name: 'Contact Us', link: "/contact-us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => setQuery({ search, category });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      // document.body.classList.add('light');
    }
  }, [isDarkMode]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  return (
    <header className={`shadow-md py-3 ${isDarkMode ? 'bg-bgPrimary shadow-sm shadow-white' : 'bg-white'}`}>
      <nav className='container mx-auto flex justify-between px-4 '>
      <Link to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">TECHNO Blogger</span>
            </Link>

        <ul className='sm:flex hidden items-center ml-auto gap-7'>
          <SearchBlog
          />
          {user ? (
            <>
              {user.email === 'test@gmail.com' && (
                <li className="navliste">
                  <NavLink to="/vdbvghdvsghcvdsghvdvndsvhcvdghvcghdsfdvfgdvgfduvfgdvghdgvfdhgghdvgh" className=' dark:text-white mx-4'>
                    <button className=" dark:text-white bg-[#2d60ee] rounded-md w-28 px-2 py-2 ">Delete a post</button>
                  </NavLink>
                </li>
              )}
              {user.role === 'admin' && (
                <li className="navliste">
                  <NavLink to="/dashboard" className='light:text-[#2d60ee] dark:text-white'>
                    <button className=" dark:text-white bg-[#2d60ee] rounded-md px-4 py-2 hover:bg-[#2d60ee]">Dashboard</button>
                  </NavLink>
                </li>
              )}
              {user.role === 'user' && (
                <li className="navliste">
                  <NavLink to="/profile" className=' text-[#2d60ee] text-3xl font-bold m-6 mx-8'>
                    <FaUserCircle className="inline-block text-2xl" />
                  </NavLink>
                </li>
              )}
              <li className="navliste">
                <NavLink onClick={handleLogout} className='light:text-[#2d60ee] dark:text-white'>
                  <button className=" dark:text-white bg-[#2d60ee] rounded-md px-4 py-2 hover:bg-[#2d60ee]">Logout</button>
                </NavLink>
              </li>
            </>
          ) : (
            <li className="navliste">
              <NavLink to="/login" className='light:text-[#2d60ee] dark:text-white'>
                <button className=" dark:text-white bg-[#2d60ee] rounded-md px-4 py-2 hover:bg-[#2d60ee]">Login</button>
              </NavLink>
            </li>

          )}

        </ul>

        <button
          onClick={toggleDarkMode}
          className='ml-20 mt-2 px-2 py-2 text-3xl border border-[#2d60ee] rounded-md text-[#2d60ee]'
        >
          {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className='flex items-center mx-4 mt-2 px-3 py-3 text-3xl border border-[#2d60ee] rounded-md text-[#2d60ee]'
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <RiCloseCircleLine className="size-6" /> : <BiMenuAltRight className="size-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <ul className='fixed top-[85px] left-0 w-full h-auto pb-5 border-b-gray-900 bg-gray-800 shadow-sm z-50'>
          <li className="text-[#2d60ee] text-3xl font-bold m-6 mx-8">Menu</li>
          {navlists.map((list, index) => (
            <li key={index} className='mx-4 mt-5 px-4 navliste'>
              <Link
                to={list.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                {list.name}
              </Link>
            </li>
          ))}
          {user ? (
            <>
              {user.email === 'test@gmail.com' && (
                <li className="mx-5 mt-7 px-5 navliste">
                  <NavLink to="/vdbvghdvsghcvdsghvdvndsvhcvdghvcghdsfdvfgdvgfduvfgdvghdgvfdhgghdvgh" className=' dark:text-white mx-4'>
                    <button className="bg-[#2d60ee] rounded-md px-4 py-2 hover:bg-[#5582ff]">Delete a post</button>
                  </NavLink>
                </li>
              )}
              {user.role === 'admin' && (
                <li className="mx-5 mt-7 px-5 navliste">
                  <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <button className=" bg-[#2d60ee] rounded-md px-4 py-2 hover:bg-[#5582ff]">Dashboard</button>
                  </NavLink>
                </li>
              )}
              {user.role === 'user' && (
                <li className="mx-5 mt-7 px-5 navliste">
                  <NavLink to="/profile" onClick={() => setIsMenuOpen(false)} className='light:text-[#2d60ee] dark:text-white'>
                    <FaUserCircle className="inline-block text-2xl" />
                  </NavLink>
                </li>
              )}
              <li className="mx-5 mt-7 px-5 navliste">
                <NavLink onClick={() => { handleLogout(); setIsMenuOpen(false); }} className='light:text-[#2d60ee] dark:text-white'>
                  <button className="light:text-[#2d60ee] dark:text-white bg-[#2d60ee] rounded-md px-4 py-2 hover:bg-[#5582ff]">Logout</button>
                </NavLink>
              </li>
            </>
          ) : (
            <li className="mx-5 mt-7 px-5 navliste">
              <NavLink to="/login" onClick={() => setIsMenuOpen(false)} className='light:text-[#2d60ee] dark:text-white'>
                <button className="light:text-[#2d60ee] dark:text-white bg-[#2d60ee] rounded-md px-4 py-2 hover:bg-[#5582ff]">Login</button>
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Navbar;