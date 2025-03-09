import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogoYoutube } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { clearVideos, changeSearchTerm } from '../features/youtube/youtubeSlice';
import { getSearchPageVideos } from '../app/reducers/getSearchPageVideos';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    
    if (searchTerm && searchTerm.trim() !== "") {
      if (location.pathname !== '/search') {
        navigate("/search");
      } else {
        dispatch(clearVideos());
        dispatch(getSearchPageVideos(false));
      }
    }
  };

  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] sticky top-0 opacity-95 z-10'>
        <div className="flex items-center gap-8 text-2xl text-white w-full">
            <GiHamburgerMenu className="text-2xl" />
            <div className="flex gap-2 items-center justify-center cursor-pointer" onClick={() => navigate("/")}>
                <BiLogoYoutube className="text-red-700 text-3xl" />
                <span className="text-2xl">YouTube</span>
            </div>
            <div className='flex items-center justify-center gap-5 flex-grow'>
              <form onSubmit={handleSearch}>
                <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'> 
                  <div className='flex gap-5 items-center pr-5'>
                    <input 
                      type="text" 
                      placeholder='Search' 
                      className='w-96 bg-zinc-900 border-none focus:outline-none text-base text-white' 
                      value={searchTerm}
                      onChange={e => dispatch(changeSearchTerm(e.target.value))}
                    />
                    <button type="submit">
                      <AiOutlineSearch className='text-xl'/>
                    </button>
                  </div>
                </div>
              </form>
              <div className='text-xl p-3 bg-zinc-900 rounded-full cursor-pointer'>
                <FaMicrophone />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex gap-2 text-base items-center bg-zinc-700 rounded-full py-1 px-3 cursor-pointer'>
                <FiPlus className='text-2xl'/> Create
              </div>
              <div className='relative cursor-pointer'>
                <BsBell />
                <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
              </div>
              <div className='cursor-pointer'>
                <CgProfile />
              </div>
            </div>
        </div>
    </div>
  );
};

export default NavBar;