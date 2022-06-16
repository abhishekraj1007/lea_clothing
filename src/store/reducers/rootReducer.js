import { combineReducers } from "@reduxjs/toolkit";
import leaQuizReducer from "../../pages/LeaQuiz/store/slice/leaQuizSlice";
import recommendationReducer from "../../pages/ProductRecommendation/store/slice/recommendationSlice";

const rootReducer = combineReducers({
  leaQuiz: leaQuizReducer,
  leaRecommendation: recommendationReducer,
});

export default rootReducer;
