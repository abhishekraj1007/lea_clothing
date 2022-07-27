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
  const content = useRoutes(routes);

  return <Box>{content}</Box>;
}
