import { createSlice, current } from "@reduxjs/toolkit";

const array = [
  {
    Handle: "tatiana lavender ruched midi corset dress",
    URL: "https://leaclothingco.com/products/tatiana-lavender-ruched-midi-corset-dress",
  },
  {
    Handle: "amelia embroidered ruffle maxi skirt",
    URL: "https://leaclothingco.com/products/amelia-embroidered-ruffle-maxi-skirt",
  },
  {
    Handle: "celeste black satin corset gown",
    URL: "https://leaclothingco.com/products/celeste-black-satin-corset-gown",
  },
  {
    Handle: "candace red satin midi dress",
    URL: "https://leaclothingco.com/products/candace-red-satin-midi-dress",
  },
  {
    Handle: "stassie tan vegan leather midi skirt",
    URL: "https://leaclothingco.com/products/stassie-tan-vegan-leather-midi-skirt",
  },
  {
    Handle: "white mesh corset",
    URL: "https://leaclothingco.com/products/white-mesh-corset",
  },
  {
    Handle: "nysa black bodycon midi dress",
    URL: "https://leaclothingco.com/products/nysa-black-bodycon-midi-dress",
  },
  {
    Handle: "coco pink polka dot corset midi dress",
    URL: "https://leaclothingco.com/products/coco-pink-polka-dot-corset-midi-dress",
  },
  {
    Handle: "tatiana red ruched mesh midi corset dress",
    URL: "https://leaclothingco.com/products/tatiana-red-ruched-mesh-midi-corset-dress",
  },
  {
    Handle: "brianna embroidered cut out midaxi dress",
    URL: "https://leaclothingco.com/products/brianna-embroidered-cut-out-midaxi-dress",
  },
  {
    Handle: "laurie silk satin midi dress",
    URL: "https://leaclothingco.com/products/laurie-silk-satin-midi-dress",
  },
  {
    Handle: "chrissy burgundy satin corset dress",
    URL: "https://leaclothingco.com/products/chrissy-burgundy-satin-corset-dress",
  },
  {
    Handle: "charlie red wide leg high waist pants",
    URL: "https://leaclothingco.com/products/charlie-red-wide-leg-high-waist-pants",
  },
  {
    Handle: "aphrodite embroidered sheer gown skirt",
    URL: "https://leaclothingco.com/products/aphrodite-embroidered-sheer-gown-skirt",
  },
  {
    Handle: "aria black-daisy tulle corset midi dress",
    URL: "https://leaclothingco.com/products/aria-black-daisy-tulle-corset-midi-dress",
  },
];
const initialState = {
  loading: false,
  recommendationData: array,
};

const recommendationSlice = createSlice({
  name: "leaRecommendation",
  initialState,
  reducers: {
    updateLoadingStatus(state, action) {
      state.loading = action.payload;
    },
    updateRecommendationData(state, action) {
      state.recommendationData = [...action.payload.recommendationData];
    },
  },
});

export const recommendationActions = recommendationSlice.actions;
export default recommendationSlice.reducer;
