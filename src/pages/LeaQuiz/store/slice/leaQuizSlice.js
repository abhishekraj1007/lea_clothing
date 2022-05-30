import { createSlice, current } from "@reduxjs/toolkit";

const initialQuizData = [
  {
    QNo: 1,
    Question: "Are you shopping with us for the 1st time?",
    Answer: "",
  },
  { QNo: 2, Question: "Could we get your digits?", Answer: "" },
  { QNo: 3, Question: "How would you describe your body?", Answer: "" },
  {
    QNo: 4,
    Question:
      "Your favourite features that you like to accentuate with your clothing?",
    Answer: "",
  },
  {
    QNo: 5,
    Question:
      "Some features that you're not-so-comfortable showcasing in your clothing?",
    Answer: "",
  },
  {
    QNo: 6,
    Question: "Would you say you're vertically gifted or efficient?",
    Answer: "",
  },
  {
    QNo: 7,
    Question: "What colour palettes are you most attracted to?",
    Answer: "",
  },
  { QNo: 8, Question: "Are you a fan of Prints?", Answer: "" },
  { QNo: 9, Question: "What kind of prints are you attracted to?", Answer: "" },
  {
    QNo: 10,
    Question: "How much do you want to spend on items from these categories?",
    Answer: "",
  },
  {
    QNo: 11,
    Question: "Which one would you describe as your style?",
    Answer: "",
  },
  { QNo: 12, Question: "Are you shopping for a special ocassion?", Answer: "" },
  {
    QNo: 13,
    Question: "Are you shopping for a specific ocassion?",
    Answer: "",
  },
];

const initialState = {
  slideCount: 1,
  quizData: initialQuizData,
};

const leaQuizSlice = createSlice({
  name: "leaQuiz",
  initialState,
  reducers: {
    incrementSlideCount(state) {
      state.slideCount += 1;
    },
    decrementSlideCount(state) {
      state.slideCount -= 1;
    },
    updateBasicQuestion(state, action) {
      const array = [...current(state.quizData)];
      const { question, answer } = action.payload;
      console.log("questionArray", array);
      console.log("question", question);
      console.log("question", answer);
      const isSameQuestion = array?.findIndex(
        (ques) => ques.Question === question
      );
      //   console.log('isSameQuestion', isSameQuestion);
      if (isSameQuestion !== -1) {
        state.quizData[isSameQuestion].Answer = answer;
        // array[isSameQuestion] = { ...action.payload };
      } else {
        console.log("question not match", isSameQuestion);
      }
    },
  },
});

export const leaQuizActions = leaQuizSlice.actions;
export default leaQuizSlice.reducer;
