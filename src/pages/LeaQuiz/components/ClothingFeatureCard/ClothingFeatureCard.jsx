import { Grid, Box, IconButton, Paper, Stack, Avatar } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch } from "react-redux";

import waistImgUrl from "../../../../assets/waist.png";
import legsImgUrl from "../../../../assets/legs-1.png";
import leftArmImgUrl from "../../../../assets/left-arm.png";
import neckImgUrl from "../../../../assets/neck.png";
import backImgUrl from "../../../../assets/back.png";

export default function ClothingFeatureCard(props) {
  const { subHeadingText, headingText } = props;
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
        <Grid item container xs={12} spacing={1} justifyContent="center" my={2}>
          <Grid item xs={6} md={2}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
          <Grid item xs={6} md={2}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
          <Grid item xs={6} md={2}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
          <Grid item xs={6} md={2}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
          <Grid item xs={6} md={2}>
            <Paper sx={styles.outlinedCard} elevation={0} variant="outlined">
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
