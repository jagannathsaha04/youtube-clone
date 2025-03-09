import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseVideoData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_YTC_API_KEY;

export const getVideoDetails = createAsyncThunk(
  "youtube/app/videoDetails",
  async (videoId) => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`;
    
    const response = await axios.get(url);
    const videoDetails = parseVideoData(response.data.items[0]);

    return videoDetails;
  }
);
