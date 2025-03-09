import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_YTC_API_KEY;

if (!API_KEY) {
  throw new Error("Missing YouTube API Key! Check your .env file.");
}

export const getHomePage = createAsyncThunk(
  "youtube/app/homePageVideos",
  async (isNext, { getState, rejectWithValue }) => {
    try {
      const {
        youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
      } = getState();

      // Construct the API URL
      const url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=seedhe%20maut&key=${API_KEY}&part=snippet&type=video${
        isNext && nextPageTokenFromState ? `&pageToken=${nextPageTokenFromState}` : ""
      }`;

      // Fetch data from YouTube API
      const response = await axios.get(url);

      // Ensure response contains valid data
      if (!response.data || !response.data.items) {
        throw new Error("Invalid response from YouTube API");
      }

      const items = response.data.items;
      const parsedData = await parseData(items);

      return {
        parsedData: [...videos, ...parsedData],
        nextPageToken: response.data.nextPageToken || null,
      };
    } catch (error) {
      console.error("Error fetching home page videos:", error);
      return rejectWithValue(error.message);
    }
  }
);
