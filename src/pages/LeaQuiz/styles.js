const headingText = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: "2.5rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "500",
  textAlign: "center",
  lineHeight: "3rem",
  cursor: "pointer",
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
  fontSize: "1.2rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "400",
  textAlign: "center",
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

const BasicOutlinedBtn = {
  borderColor: "#D3AED2",
  color: "#000",
  textTransform: "none",
  "&:hover": {
    color: "#000",
    backgroundColor: "#D3AED2",
    borderColor: "#D3AED2",
    transition: "all 0.4s",
  },
};

const sizeSelectCard = {
  minHeight: "200px",
  p: 2,
  backgroundColor: "transparent",
  color: "#6C4A6D",
  borderColor: "#D3AED280",
};

const outlinedCard = {
  height: "100%",
  px: 1,
  py: 2,
  backgroundColor: "transparent",
  color: "#000",
  "&:hover": {
    color: "#FFF",
    backgroundColor: "#6C4A6D",
    transition: "all 0.4s",
  },
};

const avatarBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 60,
  height: 60,
  backgroundColor: "#fff",
  color: "#6C4A6D",
  borderRadius: "50%",
};

const colorPalettes = {
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  marginLeft: "-8px",
  boxSizing: "content-box",
};

const selectedCardStyle = {
  height: "100%",
  px: 1,
  py: 2,

  color: "#FFF",
  backgroundColor: "#6C4A6D",
};

const sliderPrice = {
  width: "20%",
  textAlign: "center",
  color: "#6C4A6D",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1rem",
  fontWeight: "500",
};

const rangeCard = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  borderColor: "#6C4A6D",
  backgroundColor: "transparent",
};

const rangeChip = {
  display: "flex",
  position: "absolute",
  top: "-20px",
  backgroundColor: "#6C4A6D",
  borderRadius: "30px",
  width: "35%",
};

const rangeChipAvatar = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  backgroundColor: "#fff",
  color: "#6C4A6D",
  borderRadius: "50%",
  margin: 0.5,
};

const rangeChipText = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  color: "#fff",
  fontFamily: "Karla, sans-serif",
  fontSize: "1rem",
  fontWeight: "400",
};

export const styles = {
  headingText,
  subHeadingText,
  BasicOutlinedBtn,
  sizeSelectCard,
  outlinedCard,
  avatarBox,
  colorPalettes,
  selectedCardStyle,
  sliderPrice,
  rangeCard,
  rangeChip,
  rangeChipAvatar,
  rangeChipText,
  mobileHeadingText,
  mobileSubHeadingText,
};
