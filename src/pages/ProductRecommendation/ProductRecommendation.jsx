import { Divider, Grid, Stack, Box, Button } from "@mui/material";
import { styles } from "./styles";
import { styled } from "@mui/material/styles";

import { useSelector } from "react-redux";
import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import measureIcon from "../../assets/measure-icon.png";
import RefreshIcon from "@mui/icons-material/Refresh";

import star1 from "../../assets/Star-1.png";

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
  const recommendations = useSelector(
    (state) => state.leaRecommendation.recommendationData
  );
  const [productCount, setProductCount] = useState(3);

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    // From a child iframe
    const message = JSON.stringify({
      channel: "Quiz Taken",
    });
    window.parent.postMessage(message, "https://dev-store-1196.myshopify.com/");
  }, []);

  return (
    <>
      <Grid id="lea-recommendation" container marginY={2} spacing={6}>
        <Grid item container justifyContent="center" xs={12} spacing={1}>
          <Grid
            item
            xs={10}
            sm={12}
            md={8}
            sx={
              mobileView ? styles.mobileSubHeadingText : styles.subHeadingText
            }
          >
            {"Thanks for taking the quiz, sunshine"}
          </Grid>
          <Grid
            item
            xs={10}
            sm={12}
            md={8}
            sx={mobileView ? styles.mobileHeadingText : styles.headingText}
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
                    !mobileView
                      ? { height: "56", width: "56" }
                      : { height: "30px", width: "30px" }
                  }
                />
              </Box>
              <Box
                sx={
                  mobileView ? styles.mobileIdealSizeText : styles.idealSizeText
                }
              >
                {"Your Ideal Size"}
              </Box>
              <Box sx={mobileView ? styles.mobileIdealSize : styles.idealSize}>
                {"XL"}
              </Box>
            </Stack>
          </Grid>
          {!mobileView && (
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
            sx={mobileView ? styles.mobileSizeText : styles.sizeText}
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
          >
            {"Retake Quiz"}
          </Button>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          xs={12}
          spacing={4}
          marginX={6}
        >
          {recommendations?.map((product, index) => (
            <Fragment key={`${product["Handle"]}`}>
              {index + 1 <= productCount && (
                <Grid item xs={12} md={4}>
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
                      onClick={() =>
                        handleCards(
                          "Sasha White 5",
                          "Naomi White Crochet Cover-Up Set"
                        )
                      }
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
                        src={
                          "https://cdn.shopify.com/s/files/1/0518/6768/0952/products/image_61826f31-6ad8-4226-93c2-fd9a0f54aee7.jpg?v=1650548477"
                        }
                        alt="Sasha White 1"
                        width="100%"
                        height="100%"
                      />
                    </Box>
                    <Box sx={styles.productTitle}>{product["Handle"]}</Box>
                    <Box sx={styles.productPrice}>{"₹4899"}</Box>
                  </Stack>
                </Grid>
              )}
            </Fragment>
          ))}
        </Grid>
        <Grid item container justifyContent="center" xs={12} mb={6}>
          {productCount !== recommendations.length &&
            productCount < recommendations.length && (
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
      {!mobileView && <CenterBall />}
    </>
  );
}
