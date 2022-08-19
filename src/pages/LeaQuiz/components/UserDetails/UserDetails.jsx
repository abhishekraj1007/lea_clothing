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

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import toast from "react-hot-toast";

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
  const loading = useSelector((state) => state.leaQuiz.loading);
  const quizData = useSelector((state) => state.leaQuiz.quizData);
  const userDetailsEmail = useSelector(
    (state) => state.leaQuiz.userDeatils.Email
  );

  const theme = useTheme();
  // const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const mobileView = useMediaQuery("(max-width:1024px)");

  const [userEmail, setUserEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(null);

  const EMAIL_REGEX = /\S+@\S+\.\S+/;

  useEffect(() => {
    setUserEmail(userDetailsEmail);
  }, [userDetailsEmail]);

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
    console.log({ datestring, value });
  }, [value]);

  const recommend = async (finalQuizObj, userEmail) => {
    dispatch(leaQuizActions.updateLoadingStatus(true));
    try {
      const recommendationData = await LeaQuizApi.getRecommendation(
        finalQuizObj
      );

      console.log('recommendationData...................', recommendationData);
      if (recommendationData) {
        localStorage.setItem("userEmailId", `${userEmail}`);
        let prevProgress = 95;
        dispatch(leaQuizActions.decrementSlideCount(1));
        // dispatch(leaQuizActions.incrementProgress({ progress }));
        dispatch(leaQuizActions.decrementProgress({ prevProgress }));
        dispatch(leaQuizActions.updateLoadingStatus(false));
        dispatch(leaQuizActions.updateQuizStatus(true));

        dispatch(
          recommendationActions.updateRecommendationData({
            recommendationData: recommendationData.response,
          })
        );

        // making an API call to the customer about this
        fetch(`https://lea-clothing.herokuapp.com/send-coupon-mail`, {
          method: "POST",
          mode: "cors",
          cache: `no-cache`,
          body: JSON.stringify({
            personalizeResponse: recommendationData,
            email: userEmail,
            discountData: "",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              toast.success("Mail sent successfully");
            }
          })
          .catch((error) => {
            console.error(error);
            toast.error("could not send the email");
          });
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(leaQuizActions.updateLoadingStatus(false));
  };

  const getQuizPayload = (userEmail, birthDate) => {
    let obj = { ...finalQuizData };
    for (let i = 0; i < quizData.length; i++) {
      obj[`${quizData[i].Name}`] = {
        qno: i + 1,
        question: quizData[i].Question,
        attribute: quizData[i].Answer,
        value: quizData[i].Value,
      };
    }
    obj.email = {
      value: userEmail,
    };
    obj.dob = {
      value: birthDate,
    };
    return obj;
  };

  const handleSubmit = () => {
    if (userEmail === "") setIsSubmit(true);
    if (!isError) {
      const finalQuizObj = getQuizPayload(userEmail, birthDate);
      dispatch(
        leaQuizActions.updateUserDetails({ email: userEmail, dob: birthDate })
      );

      dispatch(leaQuizActions.updateFinalQuizData({ finalQuizObj }));
      recommend(finalQuizObj, userEmail)
        .then()
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider
          theme={createTheme({
            palette: { primary: { main: "#6C4A6D" } },
            components: {
              MuiTextField: {
                styleOverrides: {
                  root: {
                    color: "#6C4A6D",
                    "&.Mui-selected": {
                      backgroundColor: "#6C4A6D",
                      "&.Mui-focusVisible": { background: "#6C4A6D" },
                    },
                  },
                },
              },
            },
          })}
        >
          <Grid container justifyContent="center">
            {!mobileView && (
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
                    if (quizData[12].Answer === true) {
                      dispatch(leaQuizActions.decrementSlideCount());
                      if (prevProgress) {
                        dispatch(
                          leaQuizActions.decrementProgress({ prevProgress })
                        );
                      }
                    }
                    if (quizData[12].Answer === false) {
                      dispatch(leaQuizActions.decrementSlideCount(20));
                      if (prevProgress) {
                        let prevProgress = 5;
                        dispatch(
                          leaQuizActions.decrementProgress({ prevProgress })
                        );
                      }
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
              sm={8}
              justifyContent="center"
              spacing={1}
            >
              <Grid
                item
                xs={11}
                sm={12}
                sx={
                  mobileView
                    ? styles.mobileSubHeadingText
                    : styles.subHeadingText
                }
              >
                {subHeadingText}
              </Grid>
              <Grid
                item
                xs={11}
                sm={12}
                sx={mobileView ? styles.mobileHeadingText : styles.headingText}
              >
                {headingText}
              </Grid>
              <Grid
                item
                xs={11}
                sm={12}
                sx={
                  mobileView
                    ? styles.mobileSubHeadingText
                    : styles.subHeadingText
                }
              >
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
                    <Grid item xs={12}>
                      <MobileDatePicker
                        label="Day/ Month/ Year"
                        inputFormat="dd/MM/yyyy"
                        disableFuture
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      />
                    </Grid>
                    {/* <Grid item xs={4}>
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
                    </Grid> */}
                    {/* <Grid item xs={4}>
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
                              value: value === null ? "" : value.getMonth() + 1,
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
                              value: value === null ? "" : value.getFullYear(),
                            }}
                          />
                        )}
                      />
                    </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container xs={12} justifyContent="center" marginY={2}>
                {mobileView && (
                  <Grid
                    item
                    xs={4}
                    md={5}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      sx={{ color: "#D3AED2" }}
                      onClick={() => {
                        if (quizData[12].Answer === true) {
                          dispatch(leaQuizActions.decrementSlideCount());
                          if (prevProgress) {
                            dispatch(
                              leaQuizActions.decrementProgress({ prevProgress })
                            );
                          }
                        }
                        if (quizData[12].Answer === false) {
                          dispatch(leaQuizActions.decrementSlideCount(20));
                          if (prevProgress) {
                            let prevProgress = 5;
                            dispatch(
                              leaQuizActions.decrementProgress({ prevProgress })
                            );
                          }
                        }
                      }}
                    >
                      <ArrowCircleLeftIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                )}
                <Grid
                  item
                  xs={6}
                  md={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="large"
                    fullWidth
                    sx={{
                      borderRadius: "30px",
                      backgroundColor: "#6C4A6D",
                      textTransform: "none",
                      p: mobileView ? 1 : 2,
                      fontSize: `${mobileView ? "0.8rem" : "1rem"}`,
                      fontWeight: 500,
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
            {!mobileView && (
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
            )}
          </Grid>
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
}
