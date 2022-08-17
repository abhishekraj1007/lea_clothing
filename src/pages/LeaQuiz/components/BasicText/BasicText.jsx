import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { styles } from "../../styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";

export default function BasicText({ subHeadingText, headingText }) {
  const dispatch = useDispatch();

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setTimeout(() => {
      dispatch(leaQuizActions.incrementSlideCount());
    }, 2000);
  }, []);

  // const handleSlide = () => {
  //   dispatch(leaQuizActions.incrementSlideCount());
  // };

  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid
        item
        xs={11}
        sm={10}
        md={8}
        sx={mobileView ? styles.mobileSubHeadingText : styles.subHeadingText}
      >
        {subHeadingText}
      </Grid>
      <Grid
        item
        xs={11}
        sm={10}
        md={8}
        sx={mobileView ? styles.mobileHeadingText : styles.headingText}
        // onClick={handleSlide}
      >
        {headingText}
      </Grid>
    </Grid>
  );
}
