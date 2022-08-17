import { Grid, Box, IconButton, Paper, Stack, Avatar } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import hourglassImgUrl from "../../../../assets/Hourglass-2.svg";
import rectangleImgUrl from "../../../../assets/Rectangle.png";
import pearImgUrl from "../../../../assets/Pear.png";
import appleImgUrl from "../../../../assets/Apple.png";
import triangleImgUrl from "../../../../assets/Inverted-Triangle.png";

import hourglassShapImg from "../../../../assets/hourglass-shap.png";
import rectangleShapImg from "../../../../assets/rectangle-shap.png";
import pearShapImg from "../../../../assets/pear-shap.png";
import appleShapImg from "../../../../assets/apple-shap.png";
import triangleShapImg from "../../../../assets/triangle-shap.png";

export default function CardQuiz(props) {
  const { subHeadingText, headingText, progress, prevProgress } = props;
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.leaQuiz.quizData);
  const [selectedCards, setSelectedCards] = useState("");
  const [questionIndex, setQuestionIndex] = useState("");

  const theme = useTheme();
  // const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const mobileView = useMediaQuery("(max-width:1200px)");

  useEffect(() => {
    const quesIndex = quizData?.findIndex(
      (data) => data.Question === headingText
    );
    setQuestionIndex(quesIndex);
    const answers = quizData[quesIndex].Answer;
    setSelectedCards(answers);
  }, [quizData]);

  const handleCards = (selectedItem, value) => {
    const quizObj = {
      questionIndex,
      answer: selectedItem,
      value,
    };
    dispatch(leaQuizActions.updateCardQuiz(quizObj));
  };

  return (
    <Grid container justifyContent="center" my={{ xs: 6, md: 6 }}>
      {!mobileView && (
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
      )}
      <Grid
        item
        container
        xs={12}
        sm={10}
        md={8}
        justifyContent="center"
        spacing={1}
      >
        <Grid
          item
          xs={10}
          sm={11}
          md={12}
          sx={mobileView ? styles.mobileSubHeadingText : styles.subHeadingText}
        >
          {subHeadingText}
        </Grid>
        <Grid
          item
          xs={10}
          sm={11}
          md={12}
          sx={mobileView ? styles.mobileHeadingText : styles.headingText}
        >
          {headingText}
        </Grid>
        <Grid item container xs={12} spacing={2} justifyContent="center" my={2}>
          <Grid item xs={5} md={2}>
            <Paper
              sx={
                mobileView
                  ? selectedCards === "Hourglass"
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards === "Hourglass"
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
                <Box sx={{ position: "relative" }}>
                  <img src={hourglassImgUrl} height="100" width="50" />
                  <img
                    src={hourglassShapImg}
                    style={{
                      position: "absolute",
                      zIndex: "2",
                      // rigth: "20px",
                      height: "100px",
                      width: "50px",
                      left: "50%",
                      marginLeft: "-25px",
                      top: "50%",
                      marginTop: "-50px",
                      opacity: "0.65",
                    }}
                  />
                </Box>
                <Box>{"Hourglass"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={2}>
            <Paper
              sx={
                mobileView
                  ? selectedCards === "Rectangle"
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards === "Rectangle"
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
                <Box sx={{ position: "relative" }}>
                  <img src={rectangleImgUrl} height="100" width="50" />
                  <img
                    src={rectangleShapImg}
                    style={{
                      position: "absolute",
                      zIndex: "2",
                      // rigth: "20px",
                      height: "100px",
                      width: "50px",
                      left: "50%",
                      marginLeft: "-25px",
                      top: "50%",
                      marginTop: "-50px",
                      opacity: "0.65",
                    }}
                  />
                </Box>

                <Box>{"Rectangle"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={2}>
            <Paper
              sx={
                mobileView
                  ? selectedCards === "Pear"
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards === "Pear"
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
                <Box sx={{ position: "relative" }}>
                  <img src={pearImgUrl} height="100" width="50" />
                  <img
                    src={pearShapImg}
                    style={{
                      position: "absolute",
                      zIndex: "2",
                      // rigth: "20px",
                      height: "100px",
                      width: "50px",
                      left: "50%",
                      marginLeft: "-25px",
                      top: "50%",
                      marginTop: "-50px",
                      opacity: "0.65",
                    }}
                  />
                </Box>
                <Box>{"Pear"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={2}>
            <Paper
              sx={
                mobileView
                  ? selectedCards === "Apple"
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards === "Apple"
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
                <Box sx={{ position: "relative" }}>
                  <img src={appleImgUrl} height="100" width="50" />
                  <img
                    src={appleShapImg}
                    style={{
                      position: "absolute",
                      zIndex: "2",
                      // rigth: "20px",
                      height: "100px",
                      width: "50px",
                      left: "50%",
                      marginLeft: "-25px",
                      top: "50%",
                      marginTop: "-50px",
                      opacity: "0.65",
                    }}
                  />
                </Box>

                <Box>{"Apple"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={2}>
            <Paper
              sx={
                mobileView
                  ? selectedCards === "Inverted Triangle"
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards === "Inverted Triangle"
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
                <Box sx={{ position: "relative" }}>
                  <img src={triangleImgUrl} height="100" width="50" />
                  <img
                    src={triangleShapImg}
                    style={{
                      position: "absolute",
                      zIndex: "2",
                      // rigth: "20px",
                      height: "100px",
                      width: "50px",
                      left: "50%",
                      marginLeft: "-25px",
                      top: "50%",
                      marginTop: "-50px",
                      opacity: "0.65",
                    }}
                  />
                </Box>

                <Box>{"Inverted Triangle"}</Box>
              </Stack>
            </Paper>
          </Grid>

          {mobileView && (
            <Grid item container xs={12} justifyContent="center" my={2}>
              <Grid
                item
                xs={5}
                sm={5}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{ color: "#D3AED2" }}
                  onClick={() => {
                    dispatch(leaQuizActions.decrementSlideCount());
                    if (prevProgress)
                      dispatch(
                        leaQuizActions.decrementProgress({ prevProgress })
                      );
                  }}
                >
                  <ArrowCircleLeftIcon fontSize="large" />
                </IconButton>
              </Grid>

              <Grid
                item
                xs={5}
                sm={5}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
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
          )}
        </Grid>
      </Grid>
      {!mobileView && (
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
      )}
    </Grid>
  );
}
