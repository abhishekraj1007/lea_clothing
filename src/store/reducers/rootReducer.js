import { combineReducers } from "@reduxjs/toolkit";
import leaQuizReducer from "../../pages/LeaQuiz/store/slice/leaQuizSlice";

const rootReducer = combineReducers({
  leaQuiz: leaQuizReducer,
});

export default rootReducer;
