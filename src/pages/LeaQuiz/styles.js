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

const subHeadingText = {
  fontFamily: "Karla, sans-serif",
  fontSize: "1.2rem",
  color: "#6C4A6D",
  fontStyle: "normal",
  letterSpacing: "-0.035em",
  fontWeight: "400",
  textAlign: "center",
};

const BasicOutlinedBtn = {
  borderColor: "#D3AED2",
  color: "#000",
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
  // "&:hover": {
  //   color: "#FFF",
  //   backgroundColor: "#6C4A6D",
  //   transition: "all 0.4s",
  // },
};

const outlinedCard = {
  // minHeight: "150px",
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
  // minHeight: "150px",
  height: "100%",
  px: 1,
  py: 2,

  color: "#FFF",
  backgroundColor: "#6C4A6D",
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
};
