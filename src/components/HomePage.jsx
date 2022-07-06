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
import { leaQuizActions } from "../pages/LeaQuiz/store/slice/leaQuizSlice";

export function HomePage() {
  // const dispatch = useDispatch();

  const content = useRoutes(routes);
  // const isQuizTaken = useSelector((state) => state.leaQuiz.isQuizTaken);

  // useEffect(() => {
  //   const userEmail = localStorage.getItem("userEmailId");
  //   if (userEmail) {
  //     dispatch(leaQuizActions.updateQuizStatus(true));
  //   }
  // }, [])

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
      {content}
      {/* {isQuizTaken && <ProductRecommendation />}
      {!isQuizTaken && <LeaQuiz />} */}
    </Box>
  );
}
