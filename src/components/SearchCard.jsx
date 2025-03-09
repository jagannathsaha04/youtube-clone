import React from "react";

export default function SearchCard({ data }) {
  // Create the YouTube video URL
  const youtubeVideoUrl = `https://www.youtube.com/watch?v=${data.videoId}`;
  
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border-b border-gray-700">
      {/* Video Thumbnail */}
      <div className="relative w-full md:w-60 lg:w-72 flex-shrink-0">
        <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={data.videoThumbnail}
            alt={data.videoTitle}
            className="w-full h-36 md:h-40 object-cover rounded-lg"
          />
          {/* Video Duration */}
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded-md">
            {data.videoDuration}
          </span>
        </a>
      </div>

      {/* Video Details */}
      <div className="flex flex-col justify-between">
        {/* Video Title */}
        <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer" className="text-white text-lg font-semibold line-clamp-2 hover:text-gray-300">
          {data.videoTitle}
        </a>

        {/* Channel Info */}
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
          <a href={`https://www.youtube.com/channel/${data.channelInfo.id}`} target="_blank" rel="noopener noreferrer">
            <img
              src={data.channelInfo.image}
              alt={data.channelInfo.name}
              className="w-8 h-8 rounded-full"
            />
          </a>
          <a href={`https://www.youtube.com/channel/${data.channelInfo.id}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            {data.channelInfo.name}
          </a>
        </div>

        {/* Video Stats */}
        <div className="text-gray-400 text-sm mt-2">
          <span>{data.videoViews} views • {data.videoAge} ago</span>
        </div>

        {/* Video Description */}
        <p className="hidden md:block text-gray-300 text-sm mt-2 line-clamp-2">
          {data.videoDescription}
        </p>
      </div>
    </div>
  );
}