import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_YTC_API_KEY;

export const getHomePage = createAsyncThunk(
  "youtube/app/homePageVideos",
  async (isNext, { getState }) => {
    const { youtubeApp: { nextPageToken: nextPageTokenFromState, videos } } = getState();

    // Handle pagination
    const nextPageParam = isNext && nextPageTokenFromState ? `&pageToken=${nextPageTokenFromState}` : "";
    
    // Fetch data
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=seedhe maut&key=${API_KEY}&part=snippet&type=video${nextPageParam}`
    );
    
    const items = response.data.items;
    const parsedData = await parseData(items);

    return { parsedData: [...videos, ...parsedData], nextPageToken: response.data.nextPageToken };
  }
);
