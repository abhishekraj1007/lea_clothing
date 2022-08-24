import { combineReducers } from "@reduxjs/toolkit";
import leaQuizReducer from "../../pages/LeaQuiz/store/slice/leaQuizSlice";
import recommendationReducer from "../../pages/ProductRecommendation/store/slice/recommendationSlice";
import styleProductReducer from "../../pages/StyleProductTable/store/slice/styleProductSlice";

const rootReducer = combineReducers({
  leaQuiz: leaQuizReducer,
  leaRecommendation: recommendationReducer,
  styleProduct: styleProductReducer,
});

export default rootReducer;
