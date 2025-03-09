import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getSearchPageVideos } from "../app/reducers/getSearchPageVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import SearchCard from "../components/SearchCard";
import { clearVideos } from "../features/youtube/youtubeSlice";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") {
      navigate("/");
    } else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

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
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height="calc(92.5vh - 16px)"
              className="p-4"
            >
              <div className="flex flex-col gap-4">
                {videos.map((item) => (
                  <SearchCard data={item} key={item.videoId} />
                ))}
              </div>
            </InfiniteScroll>
          )}
        </div>
      </div>
    </div>
  );
}
