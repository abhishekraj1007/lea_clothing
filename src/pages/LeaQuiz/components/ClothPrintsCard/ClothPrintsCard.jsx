import { Grid, Box, IconButton, Paper, Stack } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import floralPrintUrl from "../../../../assets/floral3.jpg";
import abstractPrintUrl from "../../../../assets/abstract2.jpg";
import resortPrintUrl from "../../../../assets/resort.jpg";
import geometricPrintUrl from "../../../../assets/geometric-pattern2.jpg";
import stripPrintUrl from "../../../../assets/stripa1.jpg";
import checkeredPrintUrl from "../../../../assets/checkered3.jpg";
import graphicsPrintUrl from "../../../../assets/graphics.jpg";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// import sashaWhite2ImgUrl from "../../../../assets/Sasha-White-2.jpg";
// import sashaWhite3ImgUrl from "../../../../assets/Sasha-White-3.jpg";
// import sashaWhite4ImgUrl from "../../../../assets/Sasha-White-4.jpg";
// import sashaWhite5ImgUrl from "../../../../assets/Sasha-White-5.jpg";
// import sashaWhite6ImgUrl from "../../../../assets/Sasha-White-6.jpg";

export default function ClothPrintsCard(props) {
  const {
    subHeadingText,
    headingText,
    instructionText,
    progress,
    prevProgress,
  } = props;
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.leaQuiz.quizData);
  const [selectedCards, setSelectedCards] = useState([]);
  const [questionIndex, setQuestionIndex] = useState("");

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletView = useMediaQuery(theme.breakpoints.down("md"));

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
      {!tabletView && (
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
          sx={tabletView ? styles.mobileSubHeadingText : styles.subHeadingText}
        >
          {subHeadingText}
        </Grid>
        <Grid
          item
          xs={10}
          sm={11}
          md={12}
          sx={tabletView ? styles.mobileHeadingText : styles.headingText}
        >
          {headingText}
        </Grid>
        <Grid
          item
          xs={10}
          sm={11}
          md={12}
          sx={tabletView ? styles.mobileSubHeadingText : styles.subHeadingText}
        >
          {instructionText}
        </Grid>
        <Grid item container xs={12} spacing={2} justifyContent="center" my={2}>
          <Grid item xs={5} md={3}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Floral")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Floral")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Floral", "Floral")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={floralPrintUrl}
                    alt="floral"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Floral"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={3}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Abstract")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Abstract")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Abstract", "Abstract")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={abstractPrintUrl}
                    alt="abstract"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Abstract"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={3}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Resort")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Resort")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Resort", "Resort")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={resortPrintUrl}
                    alt="resort"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Resort"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={3}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Geometric")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Geometric")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Geometric", "Geometric")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={geometricPrintUrl}
                    alt="grometric print"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Geometric"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={3}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Stripes")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Stripes")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Stripes", "Stripes")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={stripPrintUrl}
                    alt="strip"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Stripes"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={3}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Checkered")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Checkered")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Checkered", "Checkered")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={checkeredPrintUrl}
                    alt="Sasha White 6"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Checkered"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={3}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Graphic")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Graphic")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Graphic", "Graphic")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={graphicsPrintUrl}
                    alt="Sasha White 6"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Graphic"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={3}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("None")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("None")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("None", "None")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ height: "100%" }}
              >
                <Box>{"None"}</Box>
              </Stack>
            </Paper>
          </Grid>

          {tabletView && (
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

      {!tabletView && (
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
