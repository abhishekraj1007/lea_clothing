import { Grid, IconButton, Button } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MultipleSelectBasicQuiz = (props) => {
  const {
    subHeadingText,
    headingText,
    buttonContent,
    buttonDirection,
    values,
    progress,
    prevProgress,
    supScriptTag,
    isSkippable,
  } = props;
  const dispatch = useDispatch();
  const slideCount = useSelector((state) => state.leaQuiz.slideCount);
  const quizData = useSelector((state) => state.leaQuiz.quizData);
  const retake = useSelector((state) => state.leaQuiz.isRetake);
  const [selectedCards, setSelectedCards] = useState([]);
  const [questionIndex, setQuestionIndex] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const theme = useTheme();
  // const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const mobileView = useMediaQuery("(max-width:1200px)");

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

  const handleQuestion = (content, value) => {
    const quizObj = {
      questionIndex,
      answer: content,
      value,
    };
    dispatch(leaQuizActions.updateMultipleSelectBasicQuestion(quizObj));
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
          {slideCount !== 1 && (
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
          )}
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
        {supScriptTag ? (
          <Grid
            item
            xs={10}
            sm={11}
            md={12}
            sx={
              mobileView ? styles.mobileSubHeadingText : styles.subHeadingText
            }
          >
            {subHeadingText} <sup>{supScriptTag}</sup>
          </Grid>
        ) : (
          <Grid
            item
            xs={10}
            sm={11}
            md={12}
            sx={
              mobileView ? styles.mobileSubHeadingText : styles.subHeadingText
            }
          >
            {subHeadingText}
          </Grid>
        )}
        <Grid
          item
          xs={10}
          sm={11}
          md={12}
          sx={mobileView ? styles.mobileHeadingText : styles.headingText}
        >
          {headingText}
        </Grid>
        <Grid item container xs={12} spacing={1} justifyContent="center" my={2}>
          {buttonDirection === "row" && (
            <>
              {mobileView ? (
                <>
                  {buttonContent?.map((content, index) => (
                    <Grid
                      container
                      item
                      xs={12}
                      justifyContent="center"
                      key={`button_${content}`}
                    >
                      <Grid item xs={10} sm={8}>
                        <Button
                          variant="outlined"
                          size="large"
                          fullWidth
                          sx={
                            selectedCards?.includes(content)
                              ? styles.mobileBasicSelectedOutlinedBtn
                              : styles.mobileBasicOutlinedBtn
                          }
                          onClick={() => {
                            handleQuestion(content, values[index]);
                          }}
                        >
                          {content}
                        </Button>
                      </Grid>
                    </Grid>
                  ))}
                </>
              ) : (
                <>
                  {buttonContent?.map((content, index) => (
                    <Grid
                      container
                      item
                      xs={12}
                      md={12}
                      justifyContent="center"
                      key={`button_${content}`}
                    >
                      <Grid item xs={10} sm={6} md={6}>
                        <Button
                          variant="outlined"
                          size="large"
                          fullWidth
                          sx={
                            selectedCards?.includes(content)
                              ? styles.BasicSelectedOutlinedBtn
                              : styles.BasicOutlinedBtn
                          }
                          onClick={() => {
                            handleQuestion(content, values[index]);
                          }}
                        >
                          {content}
                        </Button>
                      </Grid>
                    </Grid>
                  ))}
                </>
              )}
            </>
          )}
        </Grid>

        {mobileView && (
          <Grid item container xs={12} justifyContent="center" my={2}>
            {slideCount !== 1 && (
              <Grid
                item
                xs={5}
                sm={4}
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
            )}

            <Grid
              item
              xs={5}
              sm={4}
              sx={{
                display: "flex",
                justifyContent: slideCount === 1 ? "center" : "flex-end",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{ color: "#6C4A6D" }}
                onClick={() => {
                  if (slideCount === 1 && retake === true) {
                    dispatch(leaQuizActions.incrementSlideCount(3));
                    if (progress) {
                      dispatch(leaQuizActions.incrementProgress({ progress }));
                    }
                  } else {
                    dispatch(leaQuizActions.incrementSlideCount());
                    if (progress)
                      dispatch(leaQuizActions.incrementProgress({ progress }));
                  }
                }}
                disabled={isDisabled}
              >
                <ArrowCircleRightIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        )}
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
              if (slideCount === 1 && retake === true) {
                dispatch(leaQuizActions.incrementSlideCount(3));
                if (progress) {
                  dispatch(leaQuizActions.incrementProgress({ progress }));
                }
              } else {
                dispatch(leaQuizActions.incrementSlideCount());
                if (progress)
                  dispatch(leaQuizActions.incrementProgress({ progress }));
              }
            }}
            disabled={isDisabled}
          >
            <ArrowCircleRightIcon fontSize="large" />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

MultipleSelectBasicQuiz.propTypes = {
  buttonDirection: PropTypes.string.isRequired,
  buttonContent: PropTypes.array.isRequired,
};

export default MultipleSelectBasicQuiz;
