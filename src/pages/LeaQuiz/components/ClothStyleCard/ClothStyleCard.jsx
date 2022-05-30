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

export default function ClothStyleCard(props) {
  const { subHeadingText, headingText, instructionText } = props;
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
        <Grid item xs={12} sx={styles.subHeadingText}>
          {subHeadingText}
        </Grid>
        <Grid item xs={12} sx={styles.headingText}>
          {headingText}
        </Grid>
        <Grid item xs={12} sx={styles.subHeadingText}>
          {instructionText}
        </Grid>
        <Grid item container xs={12} spacing={1} justifyContent="center" my={2}>
          <Grid item xs={6} md={4}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite1ImgUrl}
                    alt="Sasha White 1"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite2ImgUrl}
                    alt="Sasha White 2"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite3ImgUrl}
                    alt="Sasha White 3"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite4ImgUrl}
                    alt="Sasha White 4"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite5ImgUrl}
                    alt="Sasha White 5"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White"}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ width: "100%" }}>
                  <img
                    src={sashaWhite6ImgUrl}
                    alt="Sasha White 6"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>{"Sasha White"}</Box>
              </Stack>
            </Paper>
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
