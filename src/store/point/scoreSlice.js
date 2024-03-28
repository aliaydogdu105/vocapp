import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trueValue: 0,
  falseValue: 0,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.trueValue += 1;
    },
    decrement: (state) => {
      state.falseValue += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = scoreSlice.actions;

export default scoreSlice.reducer;
