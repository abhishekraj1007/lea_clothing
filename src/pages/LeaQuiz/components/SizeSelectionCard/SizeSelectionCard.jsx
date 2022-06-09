import {
  Grid,
  Box,
  IconButton,
  Paper,
  Stack,
  Avatar,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material";

import waistImgUrl from "../../../../assets/waist.png";
import dressesImgUrl from "../../../../assets/dress-2.png";
import legsImgUrl from "../../../../assets/legs-2.png";

// const useStyles = makeStyles({
//   root: {
//     width: 200,
//     "& .MuiOutlinedInput-input": {
//       color: "green"
//     },
//     "& .MuiInputLabel-root": {
//       color: "green"
//     },
//     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//       borderColor: "green"
//     },
//     "&:hover .MuiOutlinedInput-input": {
//       color: "red"
//     },
//     "&:hover .MuiInputLabel-root": {
//       color: "red"
//     },
//     "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//       borderColor: "red"
//     },
//     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
//       color: "purple"
//     },
//     "& .MuiInputLabel-root.Mui-focused": {
//       color: "purple"
//     },
//     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
//       borderColor: "purple"
//     }
//   }
// });

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

const LayoutRoot = styled("MenuItem")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: `-webkit-radial-gradient(${gradientDirection}, rgba(211, 174, 210, 0.5) 0%, rgba(255, 255, 255, 0.2) 46.88%, rgba(0, 0, 0, 0) 100%)`,
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
}));

export default function SizeSelectionCard(props) {
  const { subHeadingText, headingText, instructionText, progress, boldText } =
    props;
  const dispatch = useDispatch();
  const [topSelectSize, setTopSelectSize] = useState("");
  const quizData = useSelector((state) => state.leaQuiz.quizData);
  const [selectedSizes, setSelectedSizes] = useState({
    Bust: "",
    Waist: "",
    Hips: "",
  });
  const [questionIndex, setQuestionIndex] = useState("");

  const classes = useStyles();

  useEffect(() => {
    const quesIndex = quizData?.findIndex(
      (data) => data.Question === headingText
    );
    setQuestionIndex(quesIndex);
    const answers = { ...quizData[quesIndex].Answer };
    setSelectedSizes(answers);
  }, [quizData]);

  useEffect(() => {
    console.log("top Select Size", topSelectSize);
  }, [topSelectSize]);

  // const handleQuestion = (content) => {
  //   const quizObj = {
  //     question: headingText,
  //     answer: content,
  //   };
  //   dispatch(leaQuizActions.updateSingularTypeQuestion(quizObj));
  //   dispatch(leaQuizActions.updateSlideCount());

  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // setTopSelectSize(event.target.value);
    // console.log(event.target.name);
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
          <Grid item xs={12} sx={styles.subHeadingText}>
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
            <Grid item xs={6} md={3}>
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
            </Grid>
            <Grid item xs={6} md={3}>
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
            </Grid>
            <Grid item xs={6} md={3}>
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
                      <img src={legsImgUrl} alt="Top" width="60%" />
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
                      // className={classes.root}
                      // disableUnderline
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
            onClick={() => {
              dispatch(leaQuizActions.incrementSlideCount());
              if (progress)
                dispatch(leaQuizActions.incrementProgress({ progress }));
            }}
          >
            <ArrowCircleRightIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
