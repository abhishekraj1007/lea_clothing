import { Grid, Box, IconButton, Paper, Stack } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import sashaWhite1ImgUrl from "../../../../assets/Sasha-White-1.jpg";
import sashaWhite2ImgUrl from "../../../../assets/Sasha-White-2.jpg";
import sashaWhite3ImgUrl from "../../../../assets/Sasha-White-3.jpg";
import sashaWhite4ImgUrl from "../../../../assets/Sasha-White-4.jpg";
import sashaWhite5ImgUrl from "../../../../assets/Sasha-White-5.jpg";
import sashaWhite6ImgUrl from "../../../../assets/Sasha-White-6.jpg";

export default function ClothStyleCard(props) {
  const { subHeadingText, headingText, instructionText } = props;
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.leaQuiz.quizData);
  const [selectedCards, setSelectedCards] = useState([]);
  const [questionIndex, setQuestionIndex] = useState("");

  useEffect(() => {
    const quesIndex = quizData?.findIndex(
      (data) => data.Question === headingText
    );
    setQuestionIndex(quesIndex);
    const answers = [...quizData[quesIndex].Answer];
    setSelectedCards(answers);
  }, [quizData]);

  // useEffect(() => {
  //   console.log("selectedCards->", selectedCards);
  // }, [selectedCards]);

  const handleCards = (selectedItem, value) => {
    const quizObj = {
      questionIndex,
      answer: selectedItem,
      value,
    };
    dispatch(leaQuizActions.updateCardQuestion(quizObj));
  };

  return (
    <Grid container justifyContent="center" sx={{ marginTop: 6 }}>
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
          onClick={() => dispatch(leaQuizActions.decrementSlideCount())}
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
        <Grid item container xs={12} spacing={1} justifyContent="center" my={2}>
          <Grid item xs={6} md={4}>
            <Paper
              sx={
                selectedCards.includes("Sasha White 1")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Sasha White 1", "Sasha White 1")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite1ImgUrl}
                    alt="Sasha White 1"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White 1"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper
              sx={
                selectedCards.includes("Sasha White 2")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Sasha White 2", "Sasha White 2")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite2ImgUrl}
                    alt="Sasha White 2"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White 2"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper
              sx={
                selectedCards.includes("Sasha White 3")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Sasha White 3", "Sasha White 3")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite3ImgUrl}
                    alt="Sasha White 3"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White 3"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper
              sx={
                selectedCards.includes("Sasha White 4")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Sasha White 4", "Sasha White 4")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite4ImgUrl}
                    alt="Sasha White 4"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White 4"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper
              sx={
                selectedCards.includes("Sasha White 5")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Sasha White 5", "Sasha White 5")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite5ImgUrl}
                    alt="Sasha White 5"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White 5"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper
              sx={
                selectedCards.includes("Sasha White 6")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Sasha White 6", "Sasha White 6")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite6ImgUrl}
                    alt="Sasha White 6"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White 6"}</Box>
              </Stack>
            </Paper>
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
        <IconButton
          sx={{ color: "#6C4A6D" }}
          onClick={() => dispatch(leaQuizActions.incrementSlideCount())}
        >
          <ArrowCircleRightIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
