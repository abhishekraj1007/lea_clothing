import {
  Grid,
  Box,
  IconButton,
  Paper,
  Stack,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ColorCard(props) {
  const { instructionText, headingText, progress, isSkippable } = props;
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.leaQuiz.quizData);
  const [selectedCards, setSelectedCards] = useState([]);
  const [questionIndex, setQuestionIndex] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletView = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isSkippable === false && selectedCards.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [selectedCards]);

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
    <Grid container justifyContent="center" my={{ xs: 6, md: 6 }}>
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
            onClick={() => dispatch(leaQuizActions.decrementSlideCount())}
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
        <Grid item container xs={12} spacing={1} justifyContent="center" my={2}>
          <Grid item xs={5} md={4}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Pastels")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Pastels")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Pastels", "Pastels")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ marginLeft: "0px", backgroundColor: "#FFC5D1" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#C3D7F2" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#FFD6DC" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#E1F8E8" }}
                  />
                </Box>
                <Box>{"Pastels"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={4}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Neutrals")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Neutrals")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Neutrals", "Neutrals")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ marginLeft: "0px", backgroundColor: "#848587" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#F6F4E7" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#1A1F32" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#C1946D" }}
                  />
                </Box>
                <Box>{"Neutrals"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={4}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Earthly Tones")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Earthly Tones")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Earthly Tones", "Earthly Tones")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ marginLeft: "0px", backgroundColor: "#707654" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#908478" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#BB7D58" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#772A28" }}
                  />
                </Box>
                <Box>{"Earthly Tones"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={4}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Bright Hues")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Bright Hues")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Bright Hues", "Bright Hues")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ marginLeft: "0px", backgroundColor: "#FFD54D" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#F52549" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#9CBF1B" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#FB6777" }}
                  />
                </Box>
                <Box>{"Bright Hues"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={4}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("Neons")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("Neons")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("Neons", "Neons")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ marginLeft: "0px", backgroundColor: "#FF4F59" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#FFA9D6" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#F1FE01" }}
                  />
                  <Box
                    sx={
                      mobileView
                        ? styles.mobileColorPalettes
                        : styles.colorPalettes
                    }
                    style={{ backgroundColor: "#4EC6E1" }}
                  />
                </Box>
                <Box>{"Neons"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={5} md={4}>
            <Paper
              sx={
                tabletView
                  ? selectedCards.includes("All")
                    ? styles.selectedCardStyle
                    : styles.mobileOutlinedCard
                  : selectedCards.includes("All")
                  ? styles.selectedCardStyle
                  : styles.outlinedCard
              }
              elevation={0}
              variant="outlined"
              onClick={() => handleCards("All", "All")}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ height: "100%" }}
              >
                <Box>{"All"}</Box>
              </Stack>
            </Paper>
          </Grid>
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
                onClick={() => dispatch(leaQuizActions.decrementSlideCount())}
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
                disabled={isDisabled}
              >
                <ArrowCircleRightIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        )}
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
            disabled={isDisabled}
          >
            <ArrowCircleRightIcon fontSize="large" />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
}
