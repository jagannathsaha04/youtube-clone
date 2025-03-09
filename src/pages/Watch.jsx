import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getVideoDetails } from "../app/reducers/getVideoDetails";

export default function Watch() {
  const { videoId } = useParams();
  const dispatch = useAppDispatch();
  const videoDetails = useAppSelector((state) => state.youtubeApp.currentVideo);

  useEffect(() => {
    if (videoId) {
      dispatch(getVideoDetails(videoId));
    }
  }, [dispatch, videoId]);

  return (
    <div className="max-h-screen overflow-hidden flex flex-col bg-[#212121]">
      {/* Navbar */}
      <div className="h-[7.5vh]">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="flex w-full h-[92.5vh]">
        <Sidebar />

        <div className="flex-1 p-4 overflow-auto">
          <VideoPlayer videoId={videoId} />

          {videoDetails && (
            <div className="text-white mt-4">
              <h1 className="text-xl font-bold">{videoDetails.title}</h1>
              <p className="text-sm text-gray-400">{videoDetails.channelTitle}</p>
              <p className="mt-2">{videoDetails.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
