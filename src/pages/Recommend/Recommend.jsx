import { Divider, Grid, Stack, Box, Button } from "@mui/material";
import { styles } from "./styles";
import { styled } from "@mui/material/styles";

import { useSelector, useDispatch } from "react-redux";
import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// import measureIcon from "../../assets/measure-icon.png";
// import RefreshIcon from "@mui/icons-material/Refresh";

import star1 from "../../assets/Star-1.png";
// import { recommendationActions } from "./store/slice/recommendationSlice";
// import UserDataApi from "../../services/api/UserDataApi";
import GlobalLoading from "../../components/ui/GlobalLoading";
// import { leaQuizActions } from "../LeaQuiz/store/slice/leaQuizSlice";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Recommend() {
  const dispatch = useDispatch();
  // const loading = useSelector(
  //   (state) => state.leaRecommendation.loading
  // );

  const singleProductRecommend = useSelector(
    (state) => state.leaRecommendation.singleProductRecommend
  );
  const { title } = useParams();

  const [recommendations, setRecommendations] = useState([]);
  const [productCount, setProductCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));

  // useEffect(() => {
  //   console.log("recommend payload", singleProductRecommend);
  //   if(singleProductRecommend !== {}) {
  //     getUserInfo();
  //   }
  // }, [singleProductRecommend])
  // "email" : "niyantasingh@yahoo.co.in",
  // "email" : "niyantasingh@yahoo.co.in",
  // "product_title" : "Carla Mauve Silk Corset Top"
  // ...singleProductRecommend

  const getUserInfo = async (email, productTitle) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://736f-2401-4900-1c36-1510-5672-41f8-18ee-b41c.in.ngrok.io/recommend`,
        {
          email,
          product_title: productTitle,
        }
      );

      console.log("Recomendation Response:", response.data);
      if (response.data) {
        setRecommendations([...response.data]);
      }

      setIsLoading(false);
      return response.data;
    } catch (e) {
      setIsLoading(false);
      console.log("error", e);
      if (!axios.isCancel(e)) {
        throw e;
      }
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("userEmailId");
    const productTitle = title;
    console.log("productTitle", productTitle);
    console.log(email);
    getUserInfo(email, productTitle);
  }, []);

  return (
    <>
      {isLoading && <GlobalLoading />}
      <Grid id="lea-recommendation" container marginY={2} spacing={6}>
        <Grid
          item
          container
          justifyContent="center"
          xs={12}
          spacing={4}
          marginX={6}
        >
          {recommendations?.map((product, index) => (
            <Fragment key={`${product["Title"]}`}>
              {index + 1 <= productCount && (
                <Grid item xs={10} md={4}>
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
                    <Box sx={styles.productPrice}>{product["Price"]}</Box>
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
    </>
  );
}
