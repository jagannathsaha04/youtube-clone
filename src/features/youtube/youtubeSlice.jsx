import { createSlice } from '@reduxjs/toolkit';
import { getHomePage } from '../../app/reducers/getHomePage';
import { getSearchPageVideos } from '../../app/reducers/getSearchPageVideos';

const initialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideo: []
};

const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearch: (state) => {
      state.searchTerm = "";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePage.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      }
    });
    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      }
    });
  }
});

export const { clearVideos, changeSearchTerm, clearSearch } = youtubeSlice.actions;
export default youtubeSlice.reducer;