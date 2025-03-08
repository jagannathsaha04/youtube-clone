import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogoYoutube } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] sticky opacity-95'>
        <div className="flex items-center gap-8 text-2xl text-white w-full">
            <GiHamburgerMenu className="text-2xl" />
            <div className="flex gap-2 items-center justify-center">
                <BiLogoYoutube className="text-red-700 text-3xl" />
                <span className="text-2xl">YouTube</span>
            </div>
            <div className='flex items-center justify-center gap-5 flex-grow'>
              <form >
                <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'> 
                  <div className='flex gap-5 items-center pr-5'>
                    <input type="text" placeholder='Search' className='w-96 bg-zinc-900 border-none focus:outline-none rounded-r-3xl text-base'/>
                    <button><AiOutlineSearch className='text-xl'/></button>
                  </div>
                </div>
              </form>
              <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                <FaMicrophone />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex gap-2 text-base items-center bg-zinc-700 rounded-full py-1 px-3 '>
                <FiPlus className='text-2xl'/> Create
              </div>
              <div className='relative'>
                <BsBell />
                <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
              </div>
              <CgProfile />
            </div>
        </div>
    </div>
  );
}

export default NavBar;