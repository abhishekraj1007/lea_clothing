import { Grid, Box, IconButton, Paper, Stack } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function CardQuiz(props) {
  const { subHeadingText, headingText, progress, prevProgress } = props;
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
        <Grid item container xs={12} spacing={1} justifyContent="center" my={2}>
          <Grid item xs={6} md={2}>
            <Paper
              sx={
                selectedCards.includes("Hourglass")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Hourglass", "Hourglass")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <Box
                    sx={styles.avatarBox}
                    style={{ backgroundColor: "#C4C4C4" }}
                  >
                    {/* <img src={topImgUrl} alt="Top" width="65%" /> */}
                  </Box>
                </Box>
                <Box>{"Hourglass"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={2}>
            <Paper
              sx={
                selectedCards.includes("Rectangle")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Rectangle", "Rectangle")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <Box
                    sx={styles.avatarBox}
                    style={{ backgroundColor: "#C4C4C4" }}
                  >
                    {/* <img src={waistImgUrl} alt="Top" width="50%" /> */}
                  </Box>
                </Box>
                <Box>{"Rectangle"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={2}>
            <Paper
              sx={
                selectedCards.includes("Pear")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Pear", "Pear")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <Box
                    sx={styles.avatarBox}
                    style={{ backgroundColor: "#C4C4C4" }}
                  >
                    {/* <img src={dressesImgUrl} alt="Top" width="50%" /> */}
                  </Box>
                </Box>
                <Box>{"Pear"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={2}>
            <Paper
              sx={
                selectedCards.includes("Apple")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Apple", "Apple")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <Box
                    sx={styles.avatarBox}
                    style={{ backgroundColor: "#C4C4C4" }}
                  >
                    {/* <img src={legsImgUrl} alt="Top" width="50%" /> */}
                  </Box>
                </Box>
                <Box>{"Apple"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={2}>
            <Paper
              sx={
                selectedCards.includes("Inverted Triangle")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() =>
                handleCards("Inverted Triangle", "Inverted Triangle")
              }
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <Box
                    sx={styles.avatarBox}
                    style={{ backgroundColor: "#C4C4C4" }}
                  >
                    {/* <img src={legsImgUrl} alt="Top" width="50%" /> */}
                  </Box>
                </Box>
                <Box>{"Inverted Triangle"}</Box>
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
          onClick={() => {
            dispatch(leaQuizActions.incrementSlideCount());
            if (progress)
              dispatch(leaQuizActions.incrementProgress({ progress }));
          }}
        >
          <ArrowCircleRightIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
