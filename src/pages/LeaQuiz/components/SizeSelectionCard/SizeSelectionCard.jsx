import {
  Grid,
  Box,
  IconButton,
  Paper,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";

import waistImgUrl from "../../../../assets/waist.png";
import dressesImgUrl from "../../../../assets/dress-2.png";
import legsImgUrl from "../../../../assets/legs-2.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles({
  select: {
    "&:before": {
      borderColor: "white",
    },
    "&:after": {
      borderColor: "white",
    },
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "white",
    },
  },
  icon: {
    fill: "white",
  },
  root: {
    color: "white",
  },
});

export default function SizeSelectionCard(props) {
  const {
    subHeadingText,
    headingText,
    instructionText,
    progress,
    prevProgress,
    boldText,
    isSkippable,
  } = props;
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.leaQuiz.quizData);
  const retake = useSelector((state) => state.leaQuiz.isRetake);
  const [selectedSizes, setSelectedSizes] = useState({
    Bust: "",
    Waist: "",
    Hips: "",
  });
  const [questionIndex, setQuestionIndex] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletView = useMediaQuery("(max-width:1200px)");

  useEffect(() => {
    if (
      isSkippable === false &&
      selectedSizes.Bust !== "" &&
      selectedSizes.Waist !== "" &&
      selectedSizes.Hips !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedSizes]);

  useEffect(() => {
    const quesIndex = quizData?.findIndex(
      (data) => data.Question === headingText
    );
    setQuestionIndex(quesIndex);
    const answers = { ...quizData[quesIndex].Answer };
    setSelectedSizes(answers);
  }, [quizData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      leaQuizActions.updateValues({
        name,
        value,
        questionIndex,
      })
    );
  };

  const bustSize = [
    "32-33.5",
    "34-35",
    "35.5-37",
    "37.5-39.5",
    "40-42",
    "42.5-45.5",
    "46-48",
    "48.5-50.5",
    "51-53",
  ];

  const waistSize = [
    "23-24.5",
    "25-26.5",
    "27-28.5",
    "29-32",
    "33.5-34.5",
    "35-37",
    "37.5-39.5",
    "40-42",
    "42.5-44.5",
  ];

  const hipSize = [
    "34-35.5",
    "36-37.5",
    "38-39.5",
    "40-42",
    "42.5-44.5",
    "45-47.5",
    "48-50.5",
    "51-53",
    "53.5-55.5",
  ];

  return (
    <ThemeProvider
      theme={createTheme({
        palette: { primary: { main: "#D3AED280" } },
        components: {
          MuiMenuItem: {
            styleOverrides: {
              root: {
                backgroundColor: "#D3AED2",
                color: "#6C4A6D",
                "&.Mui-selected": {
                  backgroundColor: "#FFE6F6",
                  "&.Mui-focusVisible": { background: "#FFE6F6" },
                },
              },
            },
          },
          MuiList: {
            styleOverrides: {
              root: {
                paddingTop: "0px",
                paddingBottom: "0px",
              },
            },
          },
        },
      })}
    >
      <Grid container justifyContent="center" my={{ xs: 6, md: 6 }}>
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
                if (retake === true) {
                  dispatch(leaQuizActions.decrementSlideCount(1));
                  if (prevProgress)
                    dispatch(
                      leaQuizActions.decrementProgress({ prevProgress })
                    );
                } else {
                  dispatch(leaQuizActions.decrementSlideCount(2));
                  if (prevProgress)
                    dispatch(
                      leaQuizActions.decrementProgress({ prevProgress })
                    );
                }
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
            sx={
              tabletView ? styles.mobileSubHeadingText : styles.subHeadingText
            }
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
            sx={
              tabletView ? styles.mobileSubHeadingText : styles.subHeadingText
            }
          >
            {instructionText} <b>{boldText}</b>
          </Grid>
          <Grid
            item
            container
            xs={12}
            spacing={1}
            justifyContent="center"
            my={2}
          >
            <Grid
              item
              xs={11}
              sm={4}
              md={3}
              sx={{ marginY: `${mobileView ? "1rem" : "0"}` }}
            >
              {mobileView ? (
                <Paper sx={styles.rangeCard} elevation={0} variant="outlined">
                  <Box sx={styles.mobileSizeSelectionChip}>
                    <Box sx={{ width: "30%" }}>
                      <Box sx={styles.rangeChipAvatar}>
                        <img src={dressesImgUrl} alt="Bust" width="60%" />
                      </Box>
                    </Box>
                    <Box sx={styles.mobileRangeChipText}>{"Bust"}</Box>
                  </Box>

                  <Stack
                    direction="column"
                    sx={{ width: "100%", color: "#6C4A6D" }}
                    justifyContent="center"
                    alignItems="center"
                    paddingY={5}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Select
                        value={selectedSizes["Bust"]}
                        name="Bust"
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                          width: "90%",
                          backgroundColor: "#6C4A6D",
                          borderRadius: "30px",
                          padding: "0",
                          paddingBottom: "0px",
                          paddingTop: "0px",
                          borderColor: "purple",
                          color: "#fff",
                          "&:hover": {
                            color: "#6C4A6D",
                            backgroundColor: "#FFE6F6",
                            transition: "all 0.4s",
                          },
                        }}
                        variant="outlined"
                      >
                        <MenuItem disabled value="">
                          Select
                        </MenuItem>
                        {bustSize?.map((size) => (
                          <MenuItem value={size} key={`topSelectSize_${size}`}>
                            {size}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Stack>
                </Paper>
              ) : (
                <Paper
                  sx={styles.sizeSelectCard}
                  elevation={0}
                  variant="outlined"
                >
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box>
                      <Box sx={styles.avatarBox}>
                        <img src={dressesImgUrl} alt="Top" width="50%" />
                      </Box>
                    </Box>
                    <Box>{"Bust"}</Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Select
                        value={selectedSizes["Bust"]}
                        name="Bust"
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                          width: "90%",
                          backgroundColor: "#6C4A6D",
                          borderRadius: "30px",
                          padding: "0",
                          paddingBottom: "0px",
                          paddingTop: "0px",
                          borderColor: "purple",
                          color: "#fff",
                          "&:hover": {
                            color: "#6C4A6D",
                            backgroundColor: "#FFE6F6",
                            transition: "all 0.4s",
                          },
                        }}
                        variant="outlined"
                        // className={classes.root}
                        // disableUnderline
                      >
                        <MenuItem disabled value="">
                          Select
                        </MenuItem>
                        {bustSize?.map((size) => (
                          <MenuItem value={size} key={`topSelectSize_${size}`}>
                            {size}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Stack>
                </Paper>
              )}
            </Grid>
            <Grid
              item
              xs={11}
              sm={4}
              md={3}
              sx={{ marginY: `${mobileView ? "1rem" : "0"}` }}
            >
              {mobileView ? (
                <Paper sx={styles.rangeCard} elevation={0} variant="outlined">
                  <Box sx={styles.mobileSizeSelectionChip}>
                    <Box sx={{ width: "30%" }}>
                      <Box sx={styles.rangeChipAvatar}>
                        <img src={waistImgUrl} alt="Waist" width="60%" />
                      </Box>
                    </Box>
                    <Box sx={styles.mobileRangeChipText}>{"Waist"}</Box>
                  </Box>

                  <Stack
                    direction="column"
                    sx={{ width: "100%", color: "#6C4A6D" }}
                    justifyContent="center"
                    alignItems="center"
                    paddingY={5}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Select
                        value={selectedSizes["Waist"]}
                        name="Waist"
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                          width: "90%",
                          backgroundColor: "#6C4A6D",
                          borderRadius: "30px",
                          padding: "0",
                          paddingBottom: "0px",
                          paddingTop: "0px",
                          borderColor: "purple",
                          color: "#fff",
                          "&:hover": {
                            color: "#6C4A6D",
                            backgroundColor: "#FFE6F6",
                            transition: "all 0.4s",
                          },
                        }}
                        variant="outlined"
                      >
                        <MenuItem disabled value="">
                          Select
                        </MenuItem>
                        {waistSize?.map((size) => (
                          <MenuItem value={size} key={`topSelectSize_${size}`}>
                            {size}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Stack>
                </Paper>
              ) : (
                <Paper
                  sx={styles.sizeSelectCard}
                  elevation={0}
                  variant="outlined"
                >
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box>
                      <Box sx={styles.avatarBox}>
                        <img src={waistImgUrl} alt="Top" width="50%" />
                      </Box>
                    </Box>
                    <Box>{"Waist"}</Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Select
                        value={selectedSizes["Waist"]}
                        name="Waist"
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                          width: "90%",
                          backgroundColor: "#6C4A6D",
                          borderRadius: "30px",
                          padding: "0",
                          paddingBottom: "0px",
                          paddingTop: "0px",
                          borderColor: "purple",
                          color: "#fff",
                          "&:hover": {
                            color: "#6C4A6D",
                            backgroundColor: "#FFE6F6",
                            transition: "all 0.4s",
                          },
                        }}
                        variant="outlined"
                        // className={classes.root}
                        // disableUnderline
                      >
                        <MenuItem disabled value="">
                          Select
                        </MenuItem>
                        {waistSize?.map((size) => (
                          <MenuItem value={size} key={`topSelectSize_${size}`}>
                            {size}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Stack>
                </Paper>
              )}
            </Grid>
            <Grid
              item
              xs={11}
              sm={4}
              md={3}
              sx={{ marginY: `${mobileView ? "1rem" : "0"}` }}
            >
              {mobileView ? (
                <Paper sx={styles.rangeCard} elevation={0} variant="outlined">
                  <Box sx={styles.mobileSizeSelectionChip}>
                    <Box sx={{ width: "30%" }}>
                      <Box sx={styles.rangeChipAvatar}>
                        <img src={legsImgUrl} alt="Hips" width="60%" />
                      </Box>
                    </Box>
                    <Box sx={styles.mobileRangeChipText}>{"Hips"}</Box>
                  </Box>

                  <Stack
                    direction="column"
                    sx={{ width: "100%", color: "#6C4A6D" }}
                    justifyContent="center"
                    alignItems="center"
                    paddingY={5}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Select
                        value={selectedSizes["Hips"]}
                        name="Hips"
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                          width: "90%",
                          backgroundColor: "#6C4A6D",
                          borderRadius: "30px",
                          padding: "0",
                          paddingBottom: "0px",
                          paddingTop: "0px",
                          borderColor: "purple",
                          color: "#fff",
                          "&:hover": {
                            color: "#6C4A6D",
                            backgroundColor: "#FFE6F6",
                            transition: "all 0.4s",
                          },
                        }}
                        variant="outlined"
                      >
                        <MenuItem disabled value="">
                          Select
                        </MenuItem>
                        {hipSize?.map((size) => (
                          <MenuItem value={size} key={`HipSize_${size}`}>
                            {size}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Stack>
                </Paper>
              ) : (
                <Paper
                  sx={styles.sizeSelectCard}
                  elevation={0}
                  variant="outlined"
                >
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box>
                      <Box sx={styles.avatarBox}>
                        <img src={legsImgUrl} alt="Hips" width="60%" />
                      </Box>
                    </Box>
                    <Box>{"Hips"}</Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Select
                        value={selectedSizes["Hips"]}
                        name="Hips"
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                          width: "90%",
                          backgroundColor: "#6C4A6D",
                          borderRadius: "30px",
                          padding: "0",
                          paddingBottom: "0px",
                          paddingTop: "0px",
                          borderColor: "purple",
                          color: "#fff",
                          "&:hover": {
                            color: "#6C4A6D",
                            backgroundColor: "#FFE6F6",
                            transition: "all 0.4s",
                          },
                        }}
                        variant="outlined"
                      >
                        <MenuItem disabled value="">
                          Select
                        </MenuItem>
                        {hipSize?.map((size) => (
                          <MenuItem value={size} key={`HipSize_${size}`}>
                            {size}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Stack>
                </Paper>
              )}
            </Grid>

            {tabletView && (
              <Grid
                item
                container
                xs={12}
                justifyContent="center"
                my={tabletView ? 4 : 2}
              >
                <Grid
                  item
                  xs={5}
                  sm={6}
                  md={4.5}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{ color: "#D3AED2" }}
                    onClick={() => {
                      if (retake === true) {
                        dispatch(leaQuizActions.decrementSlideCount(1));
                        if (prevProgress)
                          dispatch(
                            leaQuizActions.decrementProgress({ prevProgress })
                          );
                      } else {
                        dispatch(leaQuizActions.decrementSlideCount(2));
                        if (prevProgress)
                          dispatch(
                            leaQuizActions.decrementProgress({ prevProgress })
                          );
                      }
                    }}
                  >
                    <ArrowCircleLeftIcon fontSize="large" />
                  </IconButton>
                </Grid>

                <Grid
                  item
                  xs={5}
                  sm={6}
                  md={4.5}
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
                        dispatch(
                          leaQuizActions.incrementProgress({ progress })
                        );
                    }}
                    disabled={isDisabled}
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
              disabled={isDisabled}
            >
              <ArrowCircleRightIcon fontSize="large" />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
}
