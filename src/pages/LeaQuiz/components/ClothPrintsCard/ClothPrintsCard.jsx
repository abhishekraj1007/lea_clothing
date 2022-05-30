import { Grid, Box, IconButton, Paper, Stack } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch } from "react-redux";

import floralPrintUrl from "../../../../assets/floral3.jpg";
import abstractPrintUrl from "../../../../assets/abstract2.jpg";
import resortPrintUrl from "../../../../assets/resort.jpg";
import geometricPrintUrl from "../../../../assets/geometric-pattern2.jpg";
import stripPrintUrl from "../../../../assets/stripa1.jpg";
import checkeredPrintUrl from "../../../../assets/checkered3.jpg";
import graphicsPrintUrl from "../../../../assets/graphics.jpg";

// import sashaWhite2ImgUrl from "../../../../assets/Sasha-White-2.jpg";
// import sashaWhite3ImgUrl from "../../../../assets/Sasha-White-3.jpg";
// import sashaWhite4ImgUrl from "../../../../assets/Sasha-White-4.jpg";
// import sashaWhite5ImgUrl from "../../../../assets/Sasha-White-5.jpg";
// import sashaWhite6ImgUrl from "../../../../assets/Sasha-White-6.jpg";

export default function ClothPrintsCard(props) {
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
          <Grid item xs={6} md={3}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
          <Grid item xs={6} md={3}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
          <Grid item xs={6} md={3}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
          <Grid item xs={6} md={3}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
          <Grid item xs={6} md={3}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
          <Grid item xs={6} md={3}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
          <Grid item xs={6} md={3}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
          <Grid item xs={6} md={3}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
