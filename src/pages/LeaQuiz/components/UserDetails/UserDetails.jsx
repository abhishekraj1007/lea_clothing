import { Grid, Box, IconButton, TextField, Button } from "@mui/material";
import { styles } from "../../styles";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { leaQuizActions } from "../../store/slice/leaQuizSlice";
import { recommendationActions } from "../../../ProductRecommendation/store/slice/recommendationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LeaQuizApi from "../../../../services/api/LeaQuizApi";

export default function UserDetails(props) {
  const {
    subHeadingText,
    headingText,
    instructionText,
    progress,
    prevProgress,
    validateRegex,
  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const finalQuizData = useSelector((state) => state.leaQuiz.finalQuizData);

  const [userEmail, setUserEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const EMAIL_REGEX = /\S+@\S+\.\S+/;

  useEffect(() => {
    if (validateRegex(userEmail, EMAIL_REGEX)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [userEmail]);

  useEffect(() => {
    if (value)
      var datestring =
        value.getDate() +
        "/" +
        (value.getMonth() + 1) +
        "/" +
        value.getFullYear();
    setBirthDate(datestring);
  }, [value]);

  useEffect(() => {
    if (finalQuizData.email.value !== "") {
      try {
        setIsLoading(true);
        (async function () {
          const recommendationData = await LeaQuizApi.getRecommendation(
            finalQuizData
          );
          console.log("---->Data", recommendationData);
          if (recommendationData) {
            let prevProgress = 100;
            dispatch(leaQuizActions.decrementSlideCount(1));
            dispatch(leaQuizActions.decrementProgress({ prevProgress }));
            setIsLoading(false);
            dispatch(leaQuizActions.updateQuizStatus(true));

            dispatch(
              recommendationActions.updateRecommendationData({
                recommendationData,
              })
            );
          }
        })();
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
  }, [finalQuizData]);

  const handleSubmit = () => {
    if (userEmail === "") setIsSubmit(true);
    if (!isError) {
      dispatch(
        leaQuizActions.updateUserDetails({ email: userEmail, dob: birthDate })
      );
      dispatch(leaQuizActions.updateFinalQuizData());
      dispatch(leaQuizActions.incrementProgress({ progress }));
      // dispatch(leaQuizActions.incrementSlideCount());
      // navigate("/recommendation");
      // window.location.reload();
    }
  };

  return (
    <>
      {isLoading && (
        <Box sx={{ textAlign: "center" }}>
          <Box component="h1">Loading...</Box>
        </Box>
      )}
      {!isLoading && (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider
            theme={createTheme({
              palette: { primary: { main: "#D3AED280" } },
              components: {
                MuiTextField: {
                  styleOverrides: {
                    root: {
                      color: "#6C4A6D",
                      "&.Mui-selected": {
                        backgroundColor: "#FFE6F6",
                        "&.Mui-focusVisible": { background: "#FFE6F6" },
                      },
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
                  onClick={() => {
                    dispatch(leaQuizActions.decrementSlideCount());
                    if (prevProgress)
                      dispatch(
                        leaQuizActions.decrementProgress({ prevProgress })
                      );
                  }}
                >
                  <ArrowCircleLeftIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid
                item
                container
                xs={12}
                sm={8}
                justifyContent="center"
                spacing={1}
              >
                <Grid item xs={12} sx={styles.subHeadingText}>
                  {subHeadingText}
                </Grid>
                <Grid item xs={12} sx={styles.headingText}>
                  {headingText}
                </Grid>
                <Grid item xs={12} sx={styles.subHeadingText}>
                  {instructionText}
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  spacing={1}
                  justifyContent="center"
                  my={4}
                >
                  <Grid item xs={10} md={8}>
                    <Box
                      sx={{
                        fontFamily: "Karla, sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: "400",
                        color: "#6C4A6D",
                        mb: 1,
                      }}
                    >
                      {"Your Email"}
                    </Box>
                    <TextField
                      name="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="Please Enter Email"
                      variant="outlined"
                      fullWidth
                      sx={{ outlineColor: "#D3AED280" }}
                      {...(isSubmit === true && userEmail === ""
                        ? {
                            error: true,
                            helperText: "Email is Required",
                          }
                        : null)}
                      {...(!validateRegex(userEmail, EMAIL_REGEX) &&
                      userEmail !== ""
                        ? {
                            error: true,
                            helperText: "Invalid Email",
                          }
                        : null)}
                    />
                  </Grid>
                  <Grid item xs={10} md={8}>
                    <Box
                      sx={{
                        fontFamily: "Karla, sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: "400",
                        color: "#6C4A6D",
                        mb: 1,
                      }}
                    >
                      {"Your Date of Birth"}
                    </Box>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <MobileDatePicker
                          views={["day"]}
                          label="Day"
                          value={value}
                          disableFuture
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          openTo="day"
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              helperText={null}
                              inputProps={{
                                ...params.inputProps,
                                value: value === null ? "" : value.getDate(),
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <MobileDatePicker
                          views={["month"]}
                          label="Month"
                          value={value}
                          disableFuture
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          openTo="month"
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              helperText={null}
                              inputProps={{
                                ...params.inputProps,
                                value:
                                  value === null ? "" : value.getMonth() + 1,
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <MobileDatePicker
                          disableOpenPicker={false}
                          views={["year"]}
                          label="Year"
                          value={value}
                          disableFuture
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          openTo="year"
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              helperText={null}
                              inputProps={{
                                ...params.inputProps,
                                value:
                                  value === null ? "" : value.getFullYear(),
                              }}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  marginY={2}
                >
                  <Grid item xs={6} md={3}>
                    <Button
                      size="large"
                      fullWidth
                      sx={{
                        borderRadius: "30px",
                        backgroundColor: "#6C4A6D",
                        textTransform: "none",
                        p: 2,
                        color: "#fff",
                        "&:hover": {
                          color: "#000",
                          backgroundColor: "#D3AED2",
                          transition: "all 0.4s",
                        },
                      }}
                      variant="contained"
                      onClick={handleSubmit}
                    >
                      {"Get your Lea Looks"}
                    </Button>
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
              ></Grid>
            </Grid>
          </ThemeProvider>
        </LocalizationProvider>
      )}
    </>
  );
}
