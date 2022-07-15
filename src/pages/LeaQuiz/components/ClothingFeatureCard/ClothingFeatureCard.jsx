import { Grid, Box, IconButton, Paper, Stack, Avatar } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import waistImgUrl from "../../../../assets/waist.png";
import legsImgUrl from "../../../../assets/legs-1.png";
import leftArmImgUrl from "../../../../assets/left-arm.png";
import neckImgUrl from "../../../../assets/neck.png";
import backImgUrl from "../../../../assets/back.png";

export default function ClothingFeatureCard(props) {
  const { subHeadingText, headingText, progress, prevProgress, values } = props;
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.leaQuiz.quizData);
  const [selectedCards, setSelectedCards] = useState([]);
  const [questionIndex, setQuestionIndex] = useState("");

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const quesIndex = quizData?.findIndex(
      (data) => data.Question === headingText
    );
    console.log("questionIndex---->", quesIndex);
    setQuestionIndex(quesIndex);
    const answers = [...quizData[quesIndex].Answer];
    setSelectedCards(answers);
  }, [quizData]);

  useEffect(() => {
    console.log("selectedCards->", selectedCards);
  }, [selectedCards]);

  const handleCards = (selectedItem, value) => {
    const quizObj = {
      questionIndex,
      answer: selectedItem,
      value,
    };
    dispatch(leaQuizActions.updateCardQuestion(quizObj));
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
      <Grid item container xs={12} sm={8} justifyContent="center" spacing={1}>
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
          <Grid item xs={5} sm={6} md={2}>
            <Paper
              sx={
                mobileView
                  ? selectedCards.includes("Waist")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Waist")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Waist", values[0])}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <Avatar
                    alt="waist"
                    src={waistImgUrl}
                    sx={{ width: 56, height: 56 }}
                  />
                </Box>
                <Box>{"Waist"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} sm={6} md={2}>
            <Paper
              sx={
                mobileView
                  ? selectedCards.includes("Arms")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Arms")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Arms", values[1])}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <Avatar
                    alt="left-Arm"
                    src={leftArmImgUrl}
                    sx={{ width: 56, height: 56 }}
                  />
                </Box>
                <Box>{"Arms"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} sm={6} md={2}>
            <Paper
              sx={
                mobileView
                  ? selectedCards.includes("Legs")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Legs")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Legs", values[2])}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <Avatar
                    alt="legs"
                    src={legsImgUrl}
                    sx={{ width: 56, height: 56 }}
                  />
                </Box>
                <Box>{"Legs"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} sm={6} md={2}>
            <Paper
              sx={
                mobileView
                  ? selectedCards.includes("Back")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Back")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Back", values[3])}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <Avatar
                    alt="Back"
                    src={backImgUrl}
                    sx={{ width: 56, height: 56 }}
                  />
                </Box>
                <Box>{"Back"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} sm={6} md={2}>
            <Paper
              sx={
                mobileView
                  ? selectedCards.includes("Collarbones")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Collarbones")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Collarbones", values[4])}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <Avatar
                    alt="Collarbones"
                    src={neckImgUrl}
                    sx={{ width: 56, height: 56 }}
                  />
                </Box>
                <Box>{"Collarbones"}</Box>
              </Stack>
            </Paper>
          </Grid>

          {mobileView && (
            <Grid item container xs={12} justifyContent="center" my={2}>
              <Grid
                item
                xs={5}
                sm={6}
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
                sm={6}
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
