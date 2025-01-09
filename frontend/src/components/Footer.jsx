import React from 'react'
import { ImFacebook } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { SiBinance } from "react-icons/si";

const Footer = () => {
  return (

      <footer class="bg-white dark:bg-bgPrimary m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">TECHNO Blogger</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">


              <li>
                <a href="#" class="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Contact</a>
              </li>
              <li className='sm:mt-10 lg:mt-0'>
                <div className='flex justify-center items-center w-full gap-7  mt-2 m-2 mr-10 ' >
                  <a href="" className='ml-2 text-black dark:text-white text-3xl'><ImFacebook /></a>
                  <a href="" className='ml-2 text-black dark:text-white text-3xl'><FaSquareXTwitter /></a>
                  <a href="" className='ml-2 text-black dark:text-white text-3xl'><GrInstagram /></a>
                  <a href="" className='ml-2 text-black dark:text-white text-3xl'><SiBinance /></a>
                </div>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">Techno Blogger™</a>. All Rights Reserved.</span>
        </div>
      </footer>
  
  )
}

export default Footer