import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  allStyleProducts: [],
  slideStyles: {},
};

const styleProductSlice = createSlice({
  name: "styleProduct",
  initialState,
  reducers: {
    updateStyleProduct(state, action) {
      state.allStyleProducts = action.payload.updateArray;
    },
    updateSlideStyles(state, action) {
      let copyAllStyleProducts = action.payload.updateArray;
      // let obj = { ...current(state.slideStyles) };
      let slide1 = [];
      let slide2 = [];
      let slide3 = [];
      let slide4 = [];
      let slide5 = [];
      let slide6 = [];
      for (let i = 0; i < copyAllStyleProducts.length; i++) {
        if (i < 6) {
          slide1.push({ ...copyAllStyleProducts[i] });
        }
        if (i > 5 && i < 12) {
          slide2.push({ ...copyAllStyleProducts[i] });
        }
        if (i > 11 && i < 18) {
          slide3.push({ ...copyAllStyleProducts[i] });
        }
        if (i > 17 && i < 24) {
          slide4.push({ ...copyAllStyleProducts[i] });
        }
        if (i > 23 && i < 30) {
          slide5.push({ ...copyAllStyleProducts[i] });
        }
        if (i > 29 && i < 36) {
          slide6.push({ ...copyAllStyleProducts[i] });
        }
      }
      let obj = {
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
      };
      state.slideStyles = { ...obj };
    },
  },
});

export const styleProductActions = styleProductSlice.actions;
export default styleProductSlice.reducer;
