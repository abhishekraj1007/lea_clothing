import { Grid, Box, IconButton, Paper, Stack } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch } from "react-redux";

import sashaWhite1ImgUrl from "../../../../assets/Sasha-White-1.jpg";
import sashaWhite2ImgUrl from "../../../../assets/Sasha-White-2.jpg";
import sashaWhite3ImgUrl from "../../../../assets/Sasha-White-3.jpg";
import sashaWhite4ImgUrl from "../../../../assets/Sasha-White-4.jpg";
import sashaWhite5ImgUrl from "../../../../assets/Sasha-White-5.jpg";
import sashaWhite6ImgUrl from "../../../../assets/Sasha-White-6.jpg";
import topImgUrl from "../../../../assets/crop-top-1.png";
import { width } from "@mui/system";

export default function PriceRangeSlider(props) {
  const { headingText } = props;
  const dispatch = useDispatch();

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
      <Grid item container xs={12} sm={8} justifyContent="center">
        <Grid item xs={12} sx={styles.headingText}>
          {headingText}
        </Grid>
        <Grid item container xs={12} spacing={1} justifyContent="center" my={2}>
          <Grid item xs={6} md={8}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                py: 5,
                borderColor: "#6C4A6D",
                backgroundColor: "transparent",
              }}
              elevation={0}
              variant="outlined"
            >
              <Box
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "-20px",
                  backgroundColor: "#6C4A6D",
                  p: 3,
                  borderRadius: "30px",
                  width: "30%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20%",
                    height: "80%",
                    backgroundColor: "#fff",
                    color: "#6C4A6D",
                    borderRadius: "50%",
                  }}
                >
                  <img src={topImgUrl} alt="Top" width="50%" />
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6} md={8}>
            <Paper
              sx={{ outlineColor: "chocolate", p: 4 }}
              elevation={0}
              variant="outlined"
            ></Paper>
          </Grid>
          <Grid item xs={6} md={8}>
            <Paper
              sx={{ outlineColor: "chocolate", p: 4 }}
              elevation={0}
              variant="outlined"
            ></Paper>
          </Grid>
          <Grid item xs={6} md={8}>
            <Paper
              sx={{ outlineColor: "chocolate", p: 4 }}
              elevation={0}
              variant="outlined"
            ></Paper>
          </Grid>
          <Grid item xs={6} md={8}>
            <Paper
              sx={{ outlineColor: "chocolate", p: 4 }}
              elevation={0}
              variant="outlined"
            ></Paper>
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
          onClick={() => dispatch(leaQuizActions.incrementSlideCount())}
        >
          <ArrowCircleRightIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
