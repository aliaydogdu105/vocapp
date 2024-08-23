import { createSlice } from "@reduxjs/toolkit";

const wordSlice = createSlice({
  name: "word",
  initialState: "",
  reducers: {
    setWord: (state, action) => action.payload,
  },
});

export const { setWord } = wordSlice.actions;
export default wordSlice.reducer;
