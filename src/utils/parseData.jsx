import axios from "axios"; // ✅ Import axios
const API_KEY = import.meta.env.VITE_YTC_API_KEY;
import { parseVideoDuration } from "./parseVideoDuration.jsx";
import { convertRawToString } from "./convertRawToString.jsx";
import { timeSince } from "./timeSince.jsx";

export const parseData = async (items) => {
    try {
        const videoIds = [];
        const channelIds = [];

        items.forEach((element) => {
            channelIds.push(element.snippet.channelId);
            videoIds.push(element.id.videoId);
        });

        const { data: { items: channelsData } } = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`
        );

        const parsedChannelData = channelsData.map(channel => ({
            id: channel.id,
            image: channel.snippet.thumbnails.default.url,
        }));

        const { data: { items: videosData } } = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`
        );

        const parsedVideosData = [];

        items.forEach((item, index) => {
            const channelData = parsedChannelData.find(
                (data) => data.id === item.snippet.channelId
            );

            if (channelData) {
                parsedVideosData.push({
                    videoId: item.id.videoId,
                    videoTitle: item.snippet.title,
                    videoDescription: item.snippet.description,
                    videoThumbnail: item.snippet.thumbnails.medium.url,
                    videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                    videoDuration: parseVideoDuration(
                        videosData[index]?.contentDetails.duration
                    ),
                    videoViews: convertRawToString(
                        videosData[index]?.statistics.viewCount
                    ),
                    videoAge: timeSince(new Date(item.snippet.publishedAt)),
                    channelInfo: {
                        id: item.snippet.channelId,
                        image: channelData.image,
                        name: item.snippet.channelTitle,
                    },
                });
            }
        });

        return parsedVideosData;
    } catch (err) {
        console.error("Error parsing data:", err);
        return [];
    }
};