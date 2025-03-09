import React from "react";

export default function VideoPlayer({ videoId }) {
  return (
    <div className="w-full aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
}
