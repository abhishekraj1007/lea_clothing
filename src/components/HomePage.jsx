import { useEffect, useState } from "react";
// import {
//   Card,
//   Page,
//   Layout,
//   TextContainer,
//   Image,
//   Stack,
//   Link,
//   Heading,
//   Button
// } from "@shopify/polaris";

// import trophyImgUrl from "../assets/home-trophy.png";

// import { ProductsCard } from "./ProductsCard";
import LeaQuiz from "../pages/LeaQuiz/LeaQuiz";
import ProductRecommendation from "../pages/ProductRecommendation/ProductRecommendation";
import { Box, Button, Fab } from "@mui/material";
import { useRoutes } from "react-router-dom";
import routes from "../routes";
import { useDispatch, useSelector } from "react-redux";

export function HomePage() {
  const content = useRoutes(routes);
  const isQuizTaken = useSelector((state) => state.leaQuiz.isQuizTaken);

  // useEffect(() => console.log("content", content), []);
  // const [popupBtn, setPopupBtn] = useState(false);
  // const handleModal = () => {
  //   setPopupBtn(!popupBtn);
  // };
  // useEffect(() => {
  //   fetch("https://www.google.com", {
  //     method: "GET",
  //     mode: "no-cors",
  //   })
  //     .then((res) => res.text())
  //     .then((data) => {
  //       console.log("incomming data");
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <Box>
      {/* <Box
        sx={{ position: "fixed", bottom: "24px", right: "24px", zIndex: "10" }}
      >
        <Fab
          sx={{
            backgroundColor: "#FFE6F6",
            color: "#000",
            "&:hover": {
              backgroundColor: "#6C4A6D",
              color: "#fff",
              transition: "all 0.4",
            },
          }}
          onClick={handleModal}
        >
          {"Quiz"}
        </Fab>
      </Box> */}
      {/* <LeaQuiz /> */}
      {/* {content} */}
      {isQuizTaken && <ProductRecommendation />}
      {!isQuizTaken && <LeaQuiz />}
    </Box>
  );
}
