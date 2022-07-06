const headingText = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: "2.5rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "500",
  textAlign: "center",
  lineHeight: "3rem",
};

const mobileHeadingText = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1.5rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "500",
  textAlign: "center",
  lineHeight: "1.8rem",
};

const subHeadingText = {
  fontFamily: "Karla, sans-serif",
  fontSize: "1.25rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "400",
  textAlign: "center",
  lineHeight: "1.5rem",
};

const mobileSubHeadingText = {
  fontFamily: "Karla, sans-serif",
  fontSize: "0.8rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "400",
  textAlign: "center",
  lineHeight: "1rem",
};

const outlinedCard = {
  height: "20%",
  width: "105%",
  backgroundColor: "transparent",
  position: "absolute",
  top: "-0.6rem",
  zIndex: -1,
  border: "1px solid",
  borderRadius: "5px",
  borderWidth: "1px",
  borderImageSlice: "1",
  borderImageSource: "linear-gradient(#6C4A6D, #D3AED200)",
};

const sizeText = {
  fontFamily: "Karla, sans-serif",
  fontSize: "1.2rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "400",
  textAlign: "left",
  lineHeight: "1.5rem",
};

const mobileSizeText = {
  fontFamily: "Karla, sans-serif",
  fontSize: "0.8rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "400",
  textAlign: "center",
  lineHeight: "1rem",
};

const idealSizeText = {
  width: "30%",
  fontFamily: "Karla, sans-serif",
  fontSize: "1.25rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "400",
  textAlign: "left",
  lineHeight: "1.5rem",
};

const mobileIdealSizeText = {
  width: "40%",
  fontFamily: "Karla, sans-serif",
  fontSize: "0.75rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "400",
  textAlign: "left",
  lineHeight: "0.8rem",
};

const idealSize = {
  width: "50%",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "2.5rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "500",
  textAlign: "center",
};

const mobileIdealSize = {
  width: "40%",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1.5rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "500",
  textAlign: "center",
};

const retakeBtn = {
  color: "#6C4A6D",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "500",
  fontSize: "1rem",
  borderColor: "#FFE6F6",
  borderRadius: "1.5rem",
  textTransform: "none",
  "&:hover": {
    border: "1px solid #6C4A6D",
    backgroundColor: "rgb(211, 174, 210, 0.2)",
    transition: "all 0.4s",
  },
};

const productTitle = {
  fontFamily: "Karla, sans-serif",
  fontSize: "0.8rem",
  color: "#6C4A6D",
  fontWeight: "400",
  textAlign: "center",
  textTransform: "uppercase",
};

const productPrice = {
  fontFamily: "Karla, sans-serif",
  fontSize: "0.8rem",
  color: "#6C4A6D",
  fontWeight: "400",
  textAlign: "center",
  textTransform: "uppercase",
};

const loadProductBtn = {
  color: "#000",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "400",
  fontSize: "1rem",
  borderColor: "#D3AED2",
  borderRadius: "1.2rem",
  textTransform: "none",
  // py: 1,
  paddingX: 8,
  "&:hover": {
    border: "1px solid #6C4A6D",
    backgroundColor: "rgb(211, 174, 210, 0.2)",
    transition: "all 0.4s",
  },
};

export const styles = {
  headingText,
  subHeadingText,
  sizeText,
  outlinedCard,
  idealSizeText,
  idealSize,
  retakeBtn,
  productTitle,
  productPrice,
  loadProductBtn,
  mobileHeadingText,
  mobileSubHeadingText,
  mobileIdealSizeText,
  mobileIdealSize,
  mobileSizeText,
};
