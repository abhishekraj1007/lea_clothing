import { LinearProgress, Box } from "@mui/material";

export default function GlobalLoading() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0002",
        position: "fixed",
        zIndex: 10,
      }}
    >
      <LinearProgress
        sx={{
          backgroundColor: "transparent",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#6C4A6D",
          },
        }}
      />
    </Box>
  );
}
