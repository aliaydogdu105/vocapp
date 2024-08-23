import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      state.push(action.payload);
    },
    clearData: () => {
      return [];
    },
  },
});

export const { addData, clearData } = dataSlice.actions;
export default dataSlice.reducer;
