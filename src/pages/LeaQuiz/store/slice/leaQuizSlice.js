import { createSlice, current } from "@reduxjs/toolkit";

const initialQuizData = [
  {
    QNo: 1,
    Name: "start easy",
    Question: "Let's start easy, what brings you here today?",
    Answer: "",
    Value: "",
  },
  {
    QNo: 2,
    Name: "first time",
    Question: "Are you shopping with us for the 1st time?",
    Answer: "",
    Value: "",
  },
  {
    QNo: 3,
    Name: "size",
    Question: "Could we get your digits?",
    Answer: { Bust: "", Waist: "", Hips: "" },
    Value: { Bust: "", Waist: "", Hips: "" },
  },
  {
    QNo: 4,
    Name: "Bodies",
    Question: "How would you describe yours?",
    Answer: "",
    Value: "",
  },
  {
    QNo: 5,
    Name: "accentuate",
    Question:
      "Your favourite features that you like to accentuate with your clothing?",
    Answer: "",
    Value: "",
  },
  {
    QNo: 6,
    Name: "uncomfortable",
    Question:
      "Some features that you're not-so-comfortable showcasing in your clothing?",
    Answer: "",
    Value: "",
  },
  {
    QNo: 7,
    Name: "height",
    Question: "Would you say you're vertically gifted or efficient?",
    Answer: "",
    Value: "",
  },
  {
    QNo: 8,
    Name: "colour palettes",
    Question: "What colour palettes are you most attracted to?",
    Answer: "",
    Value: "",
  },
  {
    QNo: 9,
    Name: "prints_fan",
    Question: "Are you a fan of Prints?",
    Answer: "",
    Value: "",
  },
  {
    QNo: 10,
    Name: "prints",
    Question: "What kind of prints are you attracted to?",
    Answer: "",
    Value: "",
  },
  {
    QNo: 11,
    Name: "spend categories",
    Question: "How much do you want to spend on items from these categories?",
    Answer: {
      Tops: [100, 10000],
      Dresses: [100, 10000],
      Bottoms: [100, 10000],
      Loungewear: [100, 10000],
      Accessories: [100, 10000],
    },
    Value: {
      Tops: [100, 10000],
      Dresses: [100, 10000],
      Bottoms: [100, 10000],
      Loungewear: [100, 10000],
      Accessories: [100, 10000],
    },
  },
  {
    QNo: 12,
    Name: "styles",
    Question: "Which one would you describe as your style?",
    Answer: "",
    Value: "",
  },
  {
    QNo: 13,
    Name: "occasion specific",
    Question: "Are you shopping for a special ocassion?",
    Answer: "",
    Value: "",
  },
  {
    QNo: 14,
    Name: "occasion",
    Question: "Are you shopping for a specific ocassion?",
    Answer: "",
    Value: "",
  },
];

const initialFinalData = {
  "first time": {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  size: {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  Bodies: {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  accentuate: {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  uncomfortable: {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  height: {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  "colour palettes": {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  prints_fan: {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  prints: {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  "spend categories": {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  styles: {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  "occasion specific": {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  occasion: {
    qno: "",
    question: "",
    attribute: "",
    value: "",
  },
  email: {
    value: "",
  },
  dob: {
    value: "",
  },
};

const initialState = {
  slideCount: 1,
  quizData: initialQuizData,
  progressStatus: 0,
  finalQuizData: initialFinalData,
  userDeatils: { Email: "", DOB: "" },
  isQuizTaken: false,
  loading: false,
};

const leaQuizSlice = createSlice({
  name: "leaQuiz",
  initialState,
  reducers: {
    incrementSlideCount(state, action) {
      if (action.payload) {
        state.slideCount = action.payload;
      } else {
        state.slideCount += 1;
      }
    },
    decrementSlideCount(state, action) {
      if (action.payload) {
        state.slideCount = action.payload;
      } else {
        state.slideCount -= 1;
      }
    },
    updateBasicQuestion(state, action) {
      const array = [...current(state.quizData)];
      const { question, answer, value } = action.payload;
      console.log("questionArray", array);
      console.log("question", question);
      console.log("question", answer);
      console.log("***value--->", value);
      const isSameQuestion = array?.findIndex(
        (ques) => ques.Question === question
      );
      //   console.log('isSameQuestion', isSameQuestion);
      if (isSameQuestion !== -1) {
        if (answer === "Yes") {
          state.quizData[isSameQuestion].Answer = true;
        } else if (answer === "No") {
          state.quizData[isSameQuestion].Answer = false;
        } else {
          state.quizData[isSameQuestion].Answer = answer;
        }

        if (value) {
          if (value === "Yes") {
            state.quizData[isSameQuestion].Value = true;
          } else if (value === "No") {
            state.quizData[isSameQuestion].Value = false;
          } else {
            state.quizData[isSameQuestion].Value = value;
          }
        }
        // array[isSameQuestion] = { ...action.payload };
      } else {
        console.log("question not match", isSameQuestion);
      }
    },
    updateCardQuestion(state, action) {
      const array = [...current(state.quizData)];
      const { questionIndex, answer, value } = action.payload;
      // console.log("questionArray", array);
      // console.log("questionIndex--->", questionIndex);
      // console.log("question", answer);
      // console.log("value---->", value);
      if (state.quizData[questionIndex]["Answer"] === "") {
        state.quizData[questionIndex].Answer = [];
      }
      if (state.quizData[questionIndex]["Value"] === "") {
        state.quizData[questionIndex].Value = [];
      }

      // console.log("------>", current(state.quizData[questionIndex]));
      if (state.quizData[questionIndex].Answer.includes(answer)) {
        // console.log(answer, "already selected");
        const filteredArray = state.quizData[questionIndex].Answer.filter(
          (item) => item !== answer
        );
        // console.log("filteredArray", filteredArray);
        state.quizData[questionIndex].Answer = filteredArray;
      } else {
        state.quizData[questionIndex].Answer.push(answer);
      }

      if (value) {
        if (state.quizData[questionIndex].Value.includes(value)) {
          // console.log(answer, "already selected");
          const filteredArray = state.quizData[questionIndex].Value.filter(
            (item) => item !== value
          );
          // console.log("filteredArray", filteredArray);
          state.quizData[questionIndex].Value = filteredArray;
        } else {
          state.quizData[questionIndex].Value.push(value);
        }

        if (value === "None") {
          state.quizData[questionIndex].Value = ["Solid"];
        }

        if (value === "All") {
          state.quizData[questionIndex].Value = [
            "Pastel",
            "Neutral",
            "Earthly Tones",
            "Bright Hues",
            "Neon",
          ];
        }
      }

      if (answer === "None") {
        state.quizData[questionIndex].Answer = [];
      }

      if (answer === "All") {
        state.quizData[questionIndex].Answer = [
          "Pastel",
          "Neutral",
          "Earthly Tones",
          "Bright Hues",
          "Neon",
        ];
      }
    },
    updateValues(state, action) {
      const { questionIndex, name, value } = action.payload;
      console.log("---->>>>>", { questionIndex, name, value });
      state.quizData[questionIndex].Answer[name] = value;
      state.quizData[questionIndex].Value[name] = value;
    },
    incrementProgress(state, action) {
      state.progressStatus += action.payload.progress;
    },
    decrementProgress(state, action) {
      state.progressStatus -= action.payload.prevProgress;
    },
    updateFinalQuizData(state, action) {
      state.finalQuizData = action.payload.finalQuizObj;
    },
    updateUserDetails(state, action) {
      const { email, dob } = action.payload;
      state.userDeatils = {
        Email: email,
        DOB: dob,
      };
    },
    updateQuizStatus(state, action) {
      state.isQuizTaken = action.payload;
    },
    updateLoadingStatus(state, action) {
      state.loading = action.payload;
    },
    updateQuizData(state, action) {
      const { fromData } = action.payload;
      console.log("fromData:::", fromData);
      let newData = [...current(state.quizData)];
      console.log("new data", newData);
      for (let i = 0; i < newData.length; i++) {
        const qName = newData[i]["Name"];
        // if (newData[i].Name !== "start easy") {
        // console.log("//***", qName);

        // newData[i] = {
        //   Answer: fromData[`${qName}`]["attribute"],
        //   Value: fromData[`${qName}`]["value"],

        // };

        newData[i] = {
          QNo: fromData[`${qName}`]["qno"] + 1,
          Name: `${qName}`,
          Question: fromData[`${qName}`]["question"],
          Answer: fromData[`${qName}`]["attribute"],
          Value: fromData[`${qName}`]["value"],
        };
        // }
      }
      console.log("filled Data:", newData);
      state.quizData = [...newData];
      state.userDeatils.Email = fromData.email.value;
    },

    updateCardQuiz(state, action) {
      const array = [...current(state.quizData)];
      const { questionIndex, answer, value } = action.payload;
      if (answer) {
        if (state.quizData[questionIndex].Answer === answer) {
          state.quizData[questionIndex].Answer = "";
        } else {
          state.quizData[questionIndex].Answer = answer;
        }
      }

      if (value) {
        if (state.quizData[questionIndex].Value === value) {
          state.quizData[questionIndex].Value = "";
        } else {
          state.quizData[questionIndex].Value = value;
        }
      }
    },
    updateMultipleSelectBasicQuestion(state, action) {
      const array = [...current(state.quizData)];
      const { questionIndex, answer, value } = action.payload;

      if (state.quizData[questionIndex]["Answer"] === "") {
        state.quizData[questionIndex].Answer = [];
      }
      if (state.quizData[questionIndex]["Value"] === "") {
        state.quizData[questionIndex].Value = [];
      }

      if (state.quizData[questionIndex].Answer.includes(answer)) {
        const filteredArray = state.quizData[questionIndex].Answer.filter(
          (item) => item !== answer
        );
        state.quizData[questionIndex].Answer = filteredArray;
      } else {
        state.quizData[questionIndex].Answer.push(answer);
      }

      if (value) {
        if (state.quizData[questionIndex].Value.includes(value)) {
          const filteredArray = state.quizData[questionIndex].Value.filter(
            (item) => item !== value
          );
          state.quizData[questionIndex].Value = filteredArray;
        } else {
          state.quizData[questionIndex].Value.push(value);
        }
      }
    },
  },
});

export const leaQuizActions = leaQuizSlice.actions;
export default leaQuizSlice.reducer;
