import React from 'react';
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { RiPlayListAddLine } from "react-icons/ri";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { IoMdThumbsUp } from "react-icons/io";

export default function Sidebar() {
  const mainLinks = [
    { icon: <IoMdHome className='text-xl' />, name: 'Home' },
    { icon: <SiYoutubeshorts className='text-xl' />, name: 'Shorts' },
    { icon: <MdOutlineSubscriptions className='text-xl' />, name: 'Subscriptions' }
  ];

  const otherLinks = [
    { icon: <GoHistory className='text-xl' />, name: 'History' },
    { icon: <RiPlayListAddLine className='text-xl' />, name: 'Playlists' },
    { icon: <MdOutlineSmartDisplay className='text-xl' />, name: 'Your Videos' },
    { icon: <IoMdThumbsUp className='text-xl' />, name: 'Liked Video' }
  ];

  return (
    <div className='w-2/12 p-2 bg-[#212121] pr-5 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b-2 border-gray-600 bg-[#212121]'>
        {mainLinks.map(({ icon, name }) => (
          <li 
            key={name} 
            className={`pl-6 py-3 flex items-center gap-3 hover:bg-zinc-800 hover:rounded-lg transition-all duration-300 ${
              name === "Home" ? "bg-zinc-600 rounded-xl" : ""
            }`}
          >
            <a href="#" className="flex items-center gap-3 text-white">
              {icon}
              <span className='text-sm tracking-wider'>{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-600 bg-[#212121]'>
        {otherLinks.map(({ icon, name }) => (
          <li 
            key={name} 
            className='pl-6 py-3 flex items-center gap-3 hover:bg-zinc-800 hover:rounded-xl '
          >
            <a href="#" className="flex items-center gap-3 text-white">
              {icon}
              <span className='text-sm tracking-wider'>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
