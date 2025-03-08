import { createSlice } from '@reduxjs/toolkit';
import { getHomePage } from '../../app/reducers/getHomePage';

const initialState = {
  videos: [],  // Fixed typo
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideo: []
};

const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomePage.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = action.payload.parsedData;  // Fixed typo
        state.nextPageToken = action.payload.nextPageToken;
      }
    });
  }
});

export default youtubeSlice.reducer;
