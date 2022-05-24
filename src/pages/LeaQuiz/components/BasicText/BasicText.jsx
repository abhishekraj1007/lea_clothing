import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { styles } from "../../styles";

export default function BasicText({ subHeadingText, headingText }) {
  const dispatch = useDispatch();

  const handleSlide = () => {
    dispatch(leaQuizActions.incrementSlideCount());
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} sx={styles.subHeadingText}>
        {subHeadingText}
      </Grid>
      <Grid item xs={12} sm={8} sx={styles.headingText} onClick={handleSlide}>
        {headingText}
      </Grid>
    </Grid>
  );
}
