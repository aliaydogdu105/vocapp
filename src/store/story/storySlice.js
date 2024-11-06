import { createSlice } from "@reduxjs/toolkit";
import { fetchStory } from "./storyThunks";

const storySlice = createSlice({
  name: "story",
  initialState: {
    story: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearStory: (state) => {
      state.story = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStory.fulfilled, (state, action) => {
        state.loading = false;
        state.story = action.payload;
      })
      .addCase(fetchStory.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch the story. Refresh the page or try again later.";
      });
  },
});

export const { clearStory } = storySlice.actions;
export default storySlice.reducer;
