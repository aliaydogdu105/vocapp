import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "./point/scoreSlice";
import wordSlice from "./wordDefinitions/wordSlice";
import dataSlice from "./dataDefinitions/dataSlice";
import storySlice from "./story/storySlice"

export const store = configureStore({
  reducer: {
    score: scoreSlice,
    word: wordSlice,
    data: dataSlice,
    story: storySlice,
  },
});
