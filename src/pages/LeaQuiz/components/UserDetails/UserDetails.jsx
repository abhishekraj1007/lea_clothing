import {
  Grid,
  Box,
  IconButton,
  Paper,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function UserDetails(props) {
  const {
    subHeadingText,
    headingText,
    instructionText,
    prevProgress,
    validateRegex,
  } = props;
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const EMAIL_REGEX = /\S+@\S+\.\S+/;

  useEffect(() => {
    console.log("userDetails", userEmail);
    if (validateRegex(userEmail, EMAIL_REGEX)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [userEmail]);
  //   const quizData = useSelector((state) => state.leaQuiz.quizData);
  //   const [selectedCards, setSelectedCards] = useState([]);
  //   const [questionIndex, setQuestionIndex] = useState("");

  //   useEffect(() => {
  //     const quesIndex = quizData?.findIndex(
  //       (data) => data.Question === headingText
  //     );
  //     setQuestionIndex(quesIndex);
  //     const answers = [...quizData[quesIndex].Answer];
  //     setSelectedCards(answers);
  //   }, [quizData]);

  //   // useEffect(() => {
  //   //   console.log("selectedCards->", selectedCards);
  //   // }, [selectedCards]);

  //   const handleCards = (selectedItem, value) => {
  //     const quizObj = {
  //       questionIndex,
  //       answer: selectedItem,
  //       value,
  //     };
  //     dispatch(leaQuizActions.updateCardQuestion(quizObj));
  //   };

  const handleSubmit = () => {
    if (userEmail === "") setIsSubmit(true);
    if (!isError) {
      dispatch(leaQuizActions.updateUserDetails({ email: userEmail, dob: "" }));
      dispatch(leaQuizActions.updateFinalQuizData());
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={12}
        sm={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{ color: "#D3AED2" }}
          onClick={() => {
            dispatch(leaQuizActions.decrementSlideCount());
            if (prevProgress)
              dispatch(leaQuizActions.decrementProgress({ prevProgress }));
          }}
        >
          <ArrowCircleLeftIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item container xs={12} sm={8} justifyContent="center" spacing={1}>
        <Grid item xs={12} sx={styles.subHeadingText}>
          {subHeadingText}
        </Grid>
        <Grid item xs={12} sx={styles.headingText}>
          {headingText}
        </Grid>
        <Grid item xs={12} sx={styles.subHeadingText}>
          {instructionText}
        </Grid>
        <Grid item container xs={12} spacing={1} justifyContent="center" my={4}>
          <Grid item xs={10} md={8}>
            <Box
              sx={{
                fontFamily: "Karla, sans-serif",
                fontSize: "0.8rem",
                fontWeight: "400",
                color: "#6C4A6D",
                mb: 1,
              }}
            >
              {"Your Email"}
            </Box>
            <TextField
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Please Enter Email"
              variant="outlined"
              fullWidth
              {...(isSubmit === true && userEmail === ""
                ? {
                    error: true,
                    helperText: "Email is Required",
                  }
                : null)}
              {...(!validateRegex(userEmail, EMAIL_REGEX) && userEmail !== ""
                ? {
                    error: true,
                    helperText: "Invalid Email",
                  }
                : null)}
            />
          </Grid>
        </Grid>
        <Grid item container xs={12} justifyContent="center" marginY={2}>
          <Grid item xs={6} md={3}>
            <Button
              size="large"
              fullWidth
              sx={{
                borderRadius: "30px",
                backgroundColor: "#6C4A6D",
                textTransform: "none",
                p: 2,
                color: "#fff",
                "&:hover": {
                  color: "#000",
                  backgroundColor: "#D3AED2",
                  transition: "all 0.4s",
                },
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              {"Get your Lea Looks"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <IconButton
          sx={{ color: "#6C4A6D" }}
          onClick={() => {
            dispatch(leaQuizActions.updateFinalQuizData());
          }}
        >
          <ArrowCircleRightIcon fontSize="large" />
        </IconButton> */}
      </Grid>
    </Grid>
  );
}
