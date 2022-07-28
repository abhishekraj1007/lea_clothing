import { Grid, Box, IconButton, Paper, Stack } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ClothStyleCard(props) {
  const {
    subHeadingText,
    headingText,
    instructionText,
    progress,
    prevProgress,
    items,
  } = props;
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.leaQuiz.quizData);
  const [selectedCards, setSelectedCards] = useState([]);
  const [questionIndex, setQuestionIndex] = useState("");

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletView = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    const quesIndex = quizData?.findIndex(
      (data) => data.Question === headingText
    );
    setQuestionIndex(quesIndex);
    const answers = [...quizData[quesIndex].Answer];
    setSelectedCards(answers);
  }, [quizData]);

  useEffect(() => {
    console.log("items", items);
  }, [items]);

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
          {items?.map((item) => (
            <Grid item xs={5} md={4} key={`${item.value.replace(/ /g, "")}`}>
              <Paper
                sx={
                  tabletView
                    ? selectedCards.includes(item.attribute)
                      ? styles.selectedCardStyle
                      : styles.mobileOutlinedCard
                    : selectedCards.includes(item.attribute)
                    ? styles.selectedCardStyle
                    : styles.outlinedCard
                }
                elevation={0}
                variant="outlined"
                onClick={() => handleCards(item.attribute, item.value)}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ textTransform: "capitalize", textAlign: "center" }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      minHeight: `${mobileView ? "100px" : "200px"}`,
                    }}
                  >
                    <img
                      src={item.imgUrl}
                      alt={item.attribute}
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Box>{item.attribute}</Box>
                </Stack>
              </Paper>
            </Grid>
          ))}

          {tabletView && (
            <Grid
              item
              container
              xs={12}
              justifyContent="center"
              mt={{ xs: 4, md: 2 }}
              mb={2}
            >
              <Grid
                item
                xs={5}
                sm={5}
                md={6}
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
                md={6}
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
