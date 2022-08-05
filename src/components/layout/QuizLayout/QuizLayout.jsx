import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const QuizLayout = (props) => {
  const { ResultComponent, gradientDirection, balls } = props;
  let leftBall, rightBall;
  if (balls) {
    leftBall = balls.leftBall;
    rightBall = balls.rightBall;
  }
  const LayoutRoot = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `-webkit-radial-gradient(${gradientDirection}, rgba(211, 174, 210, 0.5) 0%, rgba(255, 255, 255, 0.2) 46.88%, rgba(0, 0, 0, 0) 100%)`,
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  }));

  const BallLeft = styled("div")(({ theme }) => ({
    position: "absolute",
    height: `${leftBall?.size ? leftBall.size?.height : "0"}`,
    width: `${leftBall?.size ? leftBall.size?.width : "0"}`,
    borderRadius: "50%",
    bottom: `${leftBall?.position ? leftBall.position?.bottom : "0"}`,
    left: `${leftBall?.position ? leftBall.position?.left : "0"}`,
    zIndex: "-1",
    background:
      "radial-gradient(90.94% 90.99% at 29.05% 67.25%, rgba(255, 230, 246, 0.5) 3.76%, rgba(247, 207, 201, 0.19) 64.24%, rgba(0, 0, 0, 0) 100%)",
  }));

  const BallRight = styled("div")(({ theme }) => ({
    position: "absolute",
    height: `${rightBall?.size ? rightBall.size?.height : "0"}`,
    width: `${rightBall?.size ? rightBall.size?.width : "0"}`,
    borderRadius: "50%",
    bottom: `${rightBall?.position ? rightBall.position?.bottom : "0"}`,
    right: `${rightBall?.position ? rightBall.position?.right : "0"}`,
    zIndex: "-1",
    background:
      "radial-gradient(90.94% 90.99% at 29.05% 67.25%, rgba(255, 230, 246, 0.5) 3.76%, rgba(247, 207, 201, 0.19) 64.24%, rgba(0, 0, 0, 0) 100%)",
  }));

  return (
    <LayoutRoot>
      {leftBall && <BallLeft />}
      {ResultComponent}
      {rightBall && <BallRight />}
    </LayoutRoot>
  );
};

QuizLayout.propTypes = {
  gradientDirection: PropTypes.string.isRequired,
  balls: PropTypes.object,
  ResultComponent: PropTypes.node,
};

export default QuizLayout;
