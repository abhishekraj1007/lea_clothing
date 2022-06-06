import { Grid, IconButton, Button } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const BasicQuiz = (props) => {
  const {
    subHeadingText,
    headingText,
    buttonContent,
    buttonDirection,
    values,
  } = props;
  const dispatch = useDispatch();

  const handleQuestion = (content, value) => {
    const quizObj = {
      question: headingText,
      answer: content,
      value,
    };
    dispatch(leaQuizActions.updateBasicQuestion(quizObj));
    dispatch(leaQuizActions.incrementSlideCount());
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
        <Grid item container xs={12} spacing={1} justifyContent="center" my={2}>
          {buttonDirection === "column" && (
            <>
              {buttonContent?.map((content, index) => (
                <Grid item xs={4} key={`button_${content}`}>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    sx={styles.BasicOutlinedBtn}
                    onClick={() => {
                      handleQuestion(content, values[index]);
                    }}
                  >
                    {content}
                  </Button>
                </Grid>
              ))}
            </>
          )}
          {buttonDirection === "row" && (
            <>
              {buttonContent?.map((content, index) => (
                <Grid
                  container
                  item
                  xs={12}
                  justifyContent="center"
                  key={`button_${content}`}
                >
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      sx={styles.BasicOutlinedBtn}
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
};

BasicQuiz.propTypes = {
  buttonDirection: PropTypes.string.isRequired,
  buttonContent: PropTypes.array.isRequired,
};

export default BasicQuiz;