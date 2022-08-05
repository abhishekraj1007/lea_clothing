import { Divider, Grid, Stack, Box, Button } from "@mui/material";
import { styles } from "./styles";
import { styled } from "@mui/material/styles";

import { useSelector, useDispatch } from "react-redux";
import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import measureIcon from "../../assets/measure-icon.png";
import RefreshIcon from "@mui/icons-material/Refresh";

import star1 from "../../assets/Star-1.png";
import { recommendationActions } from "./store/slice/recommendationSlice";
import UserDataApi from "../../services/api/UserDataApi";
import GlobalLoading from "../../components/ui/GlobalLoading";
import { leaQuizActions } from "../LeaQuiz/store/slice/leaQuizSlice";

const CenterBall = styled("div")(({ theme }) => ({
  position: "fixed",
  height: `220%`,
  width: `110%`,
  borderRadius: "50%",
  bottom: `-163%`,
  zIndex: "-1",
  left: "50%",
  transform: "translate(-50%, 0)",
  background:
    "radial-gradient(90.94% 90.99% at 29.05% 67.25%, rgba(255, 230, 246, 0.5) 3.76%, rgba(247, 207, 201, 0.19) 64.24%, rgba(0, 0, 0, 0) 100%)",
}));

export default function ProductRecommendation() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.leaRecommendation.loading);

  const recommendations = useSelector(
    (state) => state.leaRecommendation.recommendationData
  );
  const [productCount, setProductCount] = useState(3);

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletView = useMediaQuery(theme.breakpoints.down("md"));

  const getUserInfo = async (emailId) => {
    dispatch(recommendationActions.updateLoadingStatus(true));
    try {
      const data = await UserDataApi.getUserData(emailId);
      if (data) {
        dispatch(recommendationActions.updateLoadingStatus(false));

        dispatch(
          recommendationActions.updateUserData({
            data: data.response,
          })
        );

        dispatch(
          recommendationActions.updateRecommendationData({
            recommendationData: data.response.recos,
          })
        );

        dispatch(
          leaQuizActions.updateQuizData({ fromData: data.response.form_data })
        );
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(recommendationActions.updateLoadingStatus(false));
  };

  useEffect(() => {
    const emailId = localStorage.getItem("userEmailId");
    if (emailId) {
      getUserInfo(emailId);
    }
    // From a child iframe
    const message = JSON.stringify({
      userEmail: emailId,
    });
    window.parent.postMessage(message, "*");
  }, []);

  const handleRetake = () => {
    dispatch(leaQuizActions.updateQuizStatus(false));
  };

  return (
    <>
      {loading && <GlobalLoading />}
      <Grid id="lea-recommendation" container marginY={2} spacing={6}>
        <Grid item container justifyContent="center" xs={12} spacing={1}>
          <Grid
            item
            xs={10}
            sm={12}
            md={8}
            sx={
              tabletView ? styles.mobileSubHeadingText : styles.subHeadingText
            }
          >
            {"Thanks for taking the quiz, sunshine"}
          </Grid>
          <Grid
            item
            xs={10}
            sm={12}
            md={8}
            sx={tabletView ? styles.mobileHeadingText : styles.headingText}
          >
            {"Here are our hand-picked #LeaLooks for YOU!"}
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" xs={12} spacing={2}>
          <Grid
            item
            xs={6}
            sm={3}
            md={3}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {recommendations[0]?.Size && (
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 1, md: 2 }}
                padding={1}
                sx={{ bgcolor: "#FFEBF8", borderRadius: "5rem", width: "100%" }}
              >
                <Box sx={{ width: "20%" }}>
                  <Box
                    component="img"
                    alt="measure"
                    src={measureIcon}
                    sx={
                      !tabletView
                        ? { height: "56", width: "56" }
                        : { height: "30px", width: "30px" }
                    }
                  />
                </Box>
                <Box
                  sx={
                    tabletView
                      ? styles.mobileIdealSizeText
                      : styles.idealSizeText
                  }
                >
                  {"Your Ideal Size"}
                </Box>
                <Box
                  sx={tabletView ? styles.mobileIdealSize : styles.idealSize}
                >
                  {`${recommendations[0]?.Size}`}
                </Box>
              </Stack>
            )}
          </Grid>
          {!tabletView && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: "1rem", bgcolor: "#6C4A6D", p: "0.040rem" }}
            />
          )}
          <Grid
            item
            xs={10}
            sm={10}
            md={3}
            sx={tabletView ? styles.mobileSizeText : styles.sizeText}
          >
            {
              "Taking all your fit and style preferences into consideration, we've carefully curated some looks we think you'd love, in the perfect size for you!"
            }
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" xs={12}>
          <Button
            sx={styles.retakeBtn}
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={handleRetake}
          >
            {"Retake Quiz"}
          </Button>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          xs={12}
          spacing={mobileView ? 0 : 4}
          mx={{ xs: 0, sm: 2, md: 6 }}
        >
          {recommendations?.map((product, index) => (
            <Fragment key={`${product["Title"]}`}>
              {index + 1 <= productCount && (
                <Grid item xs={10} sm={4} md={4} mt={{ xs: 4, sm: 2, md: 0 }}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    // spacing={2}
                    sx={{ position: "relative", zIndex: 2, cursor: "pointer" }}
                    onClick={() => {
                      window.open(`${product["URL"]}`, "_blank");
                    }}
                  >
                    <Box
                      sx={styles.outlinedCard}
                      // elevation={0}
                      // variant="outlined"
                    >
                      <img
                        src={star1}
                        alt="Star 1"
                        width="20px"
                        height="20px"
                        style={{
                          position: "absolute",
                          top: "-10px",
                          left: "50%",
                          transform: "translate(-50%, 0)",
                        }}
                      />
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <img
                        src={`${product["IMGURL"]}`}
                        alt={product["Title"]}
                        width="100%"
                        height="100%"
                      />
                    </Box>
                    <Box sx={styles.productTitle}>{product["Title"]}</Box>
                    <Box sx={styles.productPrice}>{`₹${product["Price"]}`}</Box>
                  </Stack>
                </Grid>
              )}
            </Fragment>
          ))}
        </Grid>
        <Grid item container justifyContent="center" xs={12} mb={6}>
          {productCount !== recommendations?.length &&
            productCount < recommendations?.length && (
              <Button
                sx={styles.loadProductBtn}
                variant="outlined"
                onClick={() => {
                  setProductCount((prevState) => prevState + 3);
                }}
              >
                {"Load More"}
              </Button>
            )}
        </Grid>
      </Grid>
      {!tabletView && <CenterBall />}
    </>
  );
}
