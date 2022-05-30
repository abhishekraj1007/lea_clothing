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
import { useDispatch } from "react-redux";

import waistImgUrl from "../../../../assets/waist.png";
import legsImgUrl from "../../../../assets/legs-1.png";
import leftArmImgUrl from "../../../../assets/left-arm.png";
import neckImgUrl from "../../../../assets/neck.png";
import backImgUrl from "../../../../assets/back.png";

export default function ColorCard(props) {
  const { instructionText, headingText } = props;
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
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={styles.colorPalettes}
                    style={{ marginLeft: "0px", backgroundColor: "#FCB9A9" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#8ECACA" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#EBD5E2" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#FFE3D5" }}
                  />
                </Box>
                <Box>{"Pastels"}</Box>
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
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={styles.colorPalettes}
                    style={{ marginLeft: "0px", backgroundColor: "#A5ADB6" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#C0B2A6" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#B8A6AF" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#C9B57E" }}
                  />
                </Box>
                <Box>{"Neutrals"}</Box>
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
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={styles.colorPalettes}
                    style={{ marginLeft: "0px", backgroundColor: "#707654" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#908478" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#BB7D58" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#772A28" }}
                  />
                </Box>
                <Box>{"Earthly Tones"}</Box>
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
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={styles.colorPalettes}
                    style={{ marginLeft: "0px", backgroundColor: "#FA6E91" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#0081BB" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#FFE878" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#77DAD5" }}
                  />
                </Box>
                <Box>{"Bright Hues"}</Box>
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
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={styles.colorPalettes}
                    style={{ marginLeft: "0px", backgroundColor: "#FFF205" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#7CFF03" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#00FFF5" }}
                  />
                  <Box
                    sx={styles.colorPalettes}
                    style={{ backgroundColor: "#F21E6E" }}
                  />
                </Box>
                <Box>{"Neons"}</Box>
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
                sx={{ height: "100%" }}
              >
                <Box>{"All"}</Box>
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
