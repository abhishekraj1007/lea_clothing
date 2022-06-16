import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  recommendationData: [],
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
