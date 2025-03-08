import React from 'react'

export default function Card({data}) {
  return (
    <div>
        <div>
            <div>
                <span>
                    {data.videoDuration}
                </span>
                <img src={data.videoThumbnail} alt='Thumbnail'/>
            </div>
            <div>
              <div>
                <a href="#"><img src={data.channelInfo.image} alt="Channel Image" /></a>
                <div>
                  <h3>
                    <a href="#">{data.videoTitle}</a>
                  </h3>
                  <div>
                    <div>
                      <a href="#">{data.channelInfo.name}</a>
                    </div>
                    <div>
                      <span>{data.videoViews}</span>
                      <span>{data.videoAge}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div> 
    </div>
  )
}
