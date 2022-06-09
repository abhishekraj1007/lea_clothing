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
import { Box, Button, Fab } from "@mui/material";

export function HomePage() {
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
      <LeaQuiz />
    </Box>
  );
}
