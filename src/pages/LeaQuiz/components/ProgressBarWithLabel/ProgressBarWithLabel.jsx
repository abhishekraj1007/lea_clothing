import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{
            backgroundColor: "transparent",
            height: "6px",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#6C4A6D",
            },
          }}
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          sx={{
            fontFamily: "Karla, sans-serif",
            fontSize: "0.7rem",
            fontWeight: "500",
          }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function ProgressBarWithLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "100",
        zIndex: "10",
        width: "100vw",
        backgroundColor: "transparent",
        padding: 0,
        margin: 0,
      }}
    >
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
