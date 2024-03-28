import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "./point/scoreSlice";

export const store = configureStore({
  reducer: {
    score: scoreSlice,
  },
});
