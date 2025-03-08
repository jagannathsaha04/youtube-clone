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
    <div className="max-h-screen overflow-auto">
      {/* Navbar */}
      <div style={{ height: "7.5vh" }}>
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        
        {!videos.length ? (
          <Spinner />
        ) : (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePage(true))}
            hasMore={videos.length<500}
            loader={<Spinner/>}
            height={650}
          >
            <div>
              {videos.map((item)=>{
                return <Card data={item} key={item.videoId}/>
              })}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}
