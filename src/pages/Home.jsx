import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { getHomePage } from '../app/reducers/getHomePage';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../components/Spinner';
import Card from '../components/Card';

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePage(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden flex flex-col bg-[#212121]">
      {/* Navbar */}
      <div className="h-[7.5vh]">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="flex w-full h-[92.5vh]">
        <Sidebar />
        
        <div className="flex-1 overflow-hidden">
          {!videos?.length ? (
            <div className="flex justify-center items-center h-full">
              <Spinner />
            </div>
          ) : (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePage(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height="calc(92.5vh - 16px)"
              className="p-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {videos.map((item) => (
                  <Card data={item} key={item.videoId} />
                ))}
              </div>
            </InfiniteScroll>
          )}
        </div>
      </div>
    </div>
  );
}