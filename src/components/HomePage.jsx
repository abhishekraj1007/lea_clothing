import { useEffect } from "react";
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
import { Box } from "@mui/material";

export function HomePage() {
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
      <LeaQuiz />
    </Box>
  );
}
