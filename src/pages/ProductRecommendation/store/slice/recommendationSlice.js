import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userData: {},
  recommendationData: [],
  singleProductRecommend: {},
};

const recommendationSlice = createSlice({
  name: "leaRecommendation",
  initialState,
  reducers: {
    updateLoadingStatus(state, action) {
      state.loading = action.payload;
    },
    updateUserData(state, action) {
      state.userData = { ...action.payload.data };
    },
    updateRecommendationData(state, action) {
      state.recommendationData = [...action.payload.recommendationData];
    },
    updateSingleProductRecommned(state, action) {
      state.singleProductRecommend = { ...action.payload.data };
    },
  },
});

export const recommendationActions = recommendationSlice.actions;
export default recommendationSlice.reducer;
