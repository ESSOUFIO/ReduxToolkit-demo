import { createSlice } from "@reduxjs/toolkit";

const couterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, show: true },
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },

    decrease: (state, action) => {
      state.value -= action.payload;
    },

    toggleShow: (state) => {
      state.show = !state.show;
    },
  },
});

export const { increase, decrease, toggleShow } = couterSlice.actions;
export default couterSlice.reducer;
