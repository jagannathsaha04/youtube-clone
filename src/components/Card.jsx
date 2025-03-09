import React from "react";

export default function Card({ data }) {
  // Create the YouTube video URL
  const youtubeVideoUrl = `https://www.youtube.com/watch?v=${data.videoId}`;

  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-2">
      {/* Video Thumbnail */}
      <div className="relative">
        <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={data.videoThumbnail}
            alt="Thumbnail"
            className="w-full rounded-lg"
          />
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
            {data.videoDuration}
          </span>
        </a>
      </div>

      {/* Video Details */}
      <div className="flex mt-3">
        <a href={`https://www.youtube.com/channel/${data.channelInfo.id}`} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
          <img
            src={data.channelInfo.image}
            alt="Channel Image"
            className="w-10 h-10 rounded-full"
          />
        </a>
        <div className="ml-3 flex flex-col">
          {/* Video Title */}
          <h3 className="text-sm font-medium text-white hover:text-gray-300">
            <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>

          {/* Channel Info */}
          <div className="text-xs text-gray-400">
            <div>
              <a href={`https://www.youtube.com/channel/${data.channelInfo.id}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
            <div className="flex gap-1">
              <span>{data.videoViews}</span>
              <span>&middot;</span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}