import { Grid, Box, IconButton, Paper, Stack, Slider } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import topImgUrl from "../../../../assets/crop-top-1.png";
import dressesImgUrl from "../../../../assets/dress.png";
import bottomsImgUrl from "../../../../assets/legs-1.png";
import loungewearImgUrl from "../../../../assets/Loungewear.png";
import accessoriesImgUrl from "../../../../assets/accessories.png";

export default function PriceRangeSlider(props) {
  const { subHeadingText, headingText, progress, prevProgress } = props;
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.leaQuiz.quizData);

  const initialRangeData = {
    Tops: [2000, 10000],
    Dresses: [2000, 10000],
    Bottoms: [2000, 10000],
    Loungewear: [2000, 10000],
    Accessories: [2000, 10000],
  };
  const [rangeData, setRangeData] = useState(initialRangeData);
  const [questionIndex, setQuestionIndex] = useState("");

  useEffect(() => {
    const quesIndex = quizData?.findIndex(
      (data) => data.Question === headingText
    );
    setQuestionIndex(quesIndex);
    const answers = { ...quizData[quesIndex].Answer };
    setRangeData(answers);
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

  return (
    <Grid container justifyContent="center" spacing={1} sx={{ marginTop: 6 }}>
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
            dispatch(leaQuizActions.decrementSlideCount());
            if (prevProgress)
              dispatch(leaQuizActions.decrementProgress({ prevProgress }));
          }}
        >
          <ArrowCircleLeftIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item container xs={12} sm={8} justifyContent="center" spacing={2}>
        <Grid item xs={12} sx={styles.subHeadingText}>
          {subHeadingText}
        </Grid>
        <Grid item xs={12} sx={styles.headingText}>
          {headingText}
        </Grid>
        <Grid item container xs={12} spacing={4} justifyContent="center" my={2}>
          <Grid item xs={12} md={8}>
            <Paper sx={styles.rangeCard} elevation={0} variant="outlined">
              <Box sx={styles.rangeChip}>
                <Box sx={{ width: "30%" }}>
                  <Box sx={styles.rangeChipAvatar}>
                    <img src={topImgUrl} alt="Top" width="60%" />
                  </Box>
                </Box>
                <Box sx={styles.rangeChipText}>{"TOPS"}</Box>
              </Box>

              <Stack
                direction="row"
                spacing={2}
                sx={{ width: "100%", color: "#6C4A6D" }}
                justifyContent="center"
                alignItems="center"
                paddingY={4}
              >
                <Box sx={styles.sliderPrice}>{`₹${rangeData["Tops"][0]}`}</Box>
                <Box sx={{ width: "60%" }}>
                  <Slider
                    value={rangeData["Tops"]}
                    name="Tops"
                    min={2000}
                    max={10000}
                    onChange={handleChange}
                    getAriaLabel={() => "Minimum distance"}
                    disableSwap
                    sx={{ color: "#6C4A6D" }}
                  />
                </Box>
                <Box sx={styles.sliderPrice}>{`₹${rangeData["Tops"][1]}`}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={styles.rangeCard} elevation={0} variant="outlined">
              <Box sx={styles.rangeChip}>
                <Box sx={{ width: "30%" }}>
                  <Box sx={styles.rangeChipAvatar}>
                    <img src={dressesImgUrl} alt="Top" width="60%" />
                  </Box>
                </Box>
                <Box sx={styles.rangeChipText}>{"DRESSES"}</Box>
              </Box>

              <Stack
                direction="row"
                spacing={2}
                sx={{ width: "100%" }}
                justifyContent="center"
                alignItems="center"
                paddingY={4}
              >
                <Box
                  sx={styles.sliderPrice}
                >{`₹${rangeData["Dresses"][0]}`}</Box>
                <Box sx={{ width: "60%" }}>
                  <Slider
                    value={rangeData["Dresses"]}
                    name="Dresses"
                    min={2000}
                    max={10000}
                    onChange={handleChange}
                    getAriaLabel={() => "Minimum distance"}
                    disableSwap
                    sx={{ color: "#6C4A6D" }}
                  />
                </Box>
                <Box
                  sx={styles.sliderPrice}
                >{`₹${rangeData["Dresses"][1]}`}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={styles.rangeCard} elevation={0} variant="outlined">
              <Box sx={styles.rangeChip}>
                <Box sx={{ width: "30%" }}>
                  <Box sx={styles.rangeChipAvatar}>
                    <img src={bottomsImgUrl} alt="Top" width="60%" />
                  </Box>
                </Box>
                <Box sx={styles.rangeChipText}>{"BOTTOMS"}</Box>
              </Box>

              <Stack
                direction="row"
                spacing={2}
                sx={{ width: "100%" }}
                justifyContent="center"
                alignItems="center"
                paddingY={4}
              >
                <Box
                  sx={styles.sliderPrice}
                >{`₹${rangeData["Bottoms"][0]}`}</Box>
                <Box sx={{ width: "60%" }}>
                  <Slider
                    value={rangeData["Bottoms"]}
                    name="Bottoms"
                    min={2000}
                    max={10000}
                    onChange={handleChange}
                    getAriaLabel={() => "Minimum distance"}
                    disableSwap
                    sx={{ color: "#6C4A6D" }}
                  />
                </Box>
                <Box
                  sx={styles.sliderPrice}
                >{`₹${rangeData["Bottoms"][1]}`}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={styles.rangeCard} elevation={0} variant="outlined">
              <Box sx={styles.rangeChip}>
                <Box sx={{ width: "30%" }}>
                  <Box sx={styles.rangeChipAvatar}>
                    <img src={loungewearImgUrl} alt="Top" width="60%" />
                  </Box>
                </Box>
                <Box sx={styles.rangeChipText}>{"LOUNGEWEAR"}</Box>
              </Box>

              <Stack
                direction="row"
                spacing={2}
                sx={{ width: "100%" }}
                justifyContent="center"
                alignItems="center"
                paddingY={4}
              >
                <Box
                  sx={styles.sliderPrice}
                >{`₹${rangeData["Loungewear"][0]}`}</Box>
                <Box sx={{ width: "60%" }}>
                  <Slider
                    value={rangeData["Loungewear"]}
                    name="Loungewear"
                    min={2000}
                    max={10000}
                    onChange={handleChange}
                    getAriaLabel={() => "Minimum distance"}
                    disableSwap
                    sx={{ color: "#6C4A6D" }}
                  />
                </Box>
                <Box
                  sx={styles.sliderPrice}
                >{`₹${rangeData["Loungewear"][1]}`}</Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={styles.rangeCard} elevation={0} variant="outlined">
              <Box sx={styles.rangeChip}>
                <Box sx={{ width: "30%" }}>
                  <Box sx={styles.rangeChipAvatar}>
                    <img src={accessoriesImgUrl} alt="Top" width="60%" />
                  </Box>
                </Box>
                <Box sx={styles.rangeChipText}>{"ACCESSORIES"}</Box>
              </Box>

              <Stack
                direction="row"
                spacing={2}
                sx={{ width: "100%" }}
                justifyContent="center"
                alignItems="center"
                paddingY={4}
              >
                <Box
                  sx={styles.sliderPrice}
                >{`₹${rangeData["Accessories"][0]}`}</Box>
                <Box sx={{ width: "60%" }}>
                  <Slider
                    value={rangeData["Accessories"]}
                    name="Accessories"
                    min={2000}
                    max={10000}
                    onChange={handleChange}
                    getAriaLabel={() => "Minimum distance"}
                    disableSwap
                    sx={{ color: "#6C4A6D" }}
                  />
                </Box>
                <Box
                  sx={styles.sliderPrice}
                >{`₹${rangeData["Accessories"][1]}`}</Box>
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
  );
}
