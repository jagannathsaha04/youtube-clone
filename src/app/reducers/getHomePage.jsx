import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_YTC_API_KEY;

export const getHomePage = createAsyncThunk(
  "youtube/app/homePageVideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();

    // Build the URL with proper pagination handling
    const url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=seedhe%20maut&key=${API_KEY}&part=snippet&type=video${
      isNext && nextPageTokenFromState ? `&pageToken=${nextPageTokenFromState}` : ""
    }`;

    // Fetch data
    const response = await axios.get(url);
    const items = response.data.items;
    const parsedData = await parseData(items);

    return {
      parsedData: [...videos, ...parsedData],
      nextPageToken: response.data.nextPageToken,
    };
  }
);