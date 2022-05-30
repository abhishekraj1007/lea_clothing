import { Box } from "@mui/material";
import QuizLayout from "../../components/layout/QuizLayout/QuizLayout";
import {
  BasicText,
  BasicQuiz,
  SizeSelectionCard,
  CardQuiz,
  ClothingFeatureCard,
  ColorCard,
  ClothPrintsCard,
  ClothStyleCard,
  PriceRangeSlider,
} from "./components";
import { useSelector } from "react-redux";

const LeaQuiz = () => {
  const slideCount = useSelector((state) => state.leaQuiz.slideCount);

  return (
    <Box>
      {slideCount === 1 && (
        <QuizLayout
          gradientDirection={"top right"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-350px", left: "-100px" },
            },
          }}
          ResultComponent={
            <BasicText
              subHeadingText={"You on Pedestal"}
              headingText={"Let’s Start Easy"}
            />
          }
        />
      )}
      {slideCount === 2 && (
        <QuizLayout
          gradientDirection={"top left"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-450px", left: "-250px" },
            },
            rightBall: {
              size: { height: "300px", width: "300px" },
              position: { bottom: "30px", right: "-200px" },
            },
          }}
          ResultComponent={
            <BasicQuiz
              subHeadingText={
                "An old relationship or perhaps start of a new one?"
              }
              headingText={"Are you shopping with us for the 1st time?"}
              buttonDirection="column"
              buttonContent={["Yes", "No"]}
            />
          }
        />
      )}
      {slideCount === 3 && (
        <QuizLayout
          gradientDirection={"top right"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-350px", left: "-100px" },
            },
          }}
          ResultComponent={
            <BasicText
              subHeadingText={"Alright!"}
              headingText={"Let’s find you a perfect fit!."}
            />
          }
        />
      )}
      {slideCount === 4 && (
        <QuizLayout
          gradientDirection={"top center"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-470px", left: "30px" },
            },
          }}
          ResultComponent={
            <SizeSelectionCard
              headingText={"Could we get your digits?"}
              instructionText={
                "Select sizes for all Parts - All sizes are in Inches"
              }
            />
          }
        />
      )}
      {slideCount === 5 && (
        <QuizLayout
          gradientDirection={"top center"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-470px", left: "30px" },
            },
          }}
          ResultComponent={
            <CardQuiz
              subHeadingText={"Bodies have many shapes"}
              headingText={"How would you describe your body?"}
            />
          }
        />
      )}
      {slideCount === 6 && (
        <QuizLayout
          gradientDirection={"top center"}
          ResultComponent={
            <ClothingFeatureCard
              subHeadingText={"Self-Love is Key"}
              headingText={
                "Your favourite features that you like to accentuate with your clothing?"
              }
            />
          }
        />
      )}
      {slideCount === 7 && (
        <QuizLayout
          gradientDirection={"top center"}
          ResultComponent={
            <ClothingFeatureCard
              subHeadingText={"Self Love is also a Process"}
              headingText={
                "Some features that you're not-so-comfortable showcasing in your clothing?"
              }
            />
          }
        />
      )}
      {slideCount === 8 && (
        <QuizLayout
          gradientDirection={"top center"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-470px", left: "30px" },
            },
          }}
          ResultComponent={
            <BasicQuiz
              subHeadingText={"Bodies have many shapes"}
              headingText={
                "Would you say you're vertically gifted or efficient?"
              }
              buttonDirection="row"
              buttonContent={[
                "Petite (5.3 and under)",
                "Average (5.4 - 5.7)",
                "Tall (5.8 and above)",
              ]}
            />
          }
        />
      )}
      {slideCount === 9 && (
        <QuizLayout
          gradientDirection={"top right"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-350px", left: "-100px" },
            },
          }}
          ResultComponent={
            <BasicText
              subHeadingText={"It’s all about aesthetics!"}
              headingText={
                "Now that we’ve got your fit, let’s talk about your style."
              }
            />
          }
        />
      )}
      {slideCount === 10 && (
        <QuizLayout
          gradientDirection={"top right"}
          ResultComponent={
            <ColorCard
              headingText={"What colour palettes are you most attracted to?"}
              instructionText={"You can select Multiple"}
            />
          }
        />
      )}
      {slideCount === 11 && (
        <QuizLayout
          gradientDirection={"top left"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-450px", left: "-250px" },
            },
            rightBall: {
              size: { height: "300px", width: "300px" },
              position: { bottom: "30px", right: "-200px" },
            },
          }}
          ResultComponent={
            <BasicQuiz
              headingText={"Are you a fan of Prints?"}
              buttonDirection="column"
              buttonContent={["Yes", "No"]}
            />
          }
        />
      )}
      {slideCount === 12 && (
        <QuizLayout
          gradientDirection={"top left"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-450px", left: "-250px" },
            },
            rightBall: {
              size: { height: "300px", width: "300px" },
              position: { bottom: "30px", right: "-200px" },
            },
          }}
          ResultComponent={
            <ClothPrintsCard
              subHeadingText={"We love prints too!"}
              headingText={"What kind of prints are you attracted to?"}
              instructionText={"You can select Multiple"}
            />
          }
        />
      )}
      {/* {slideCount === 13 && (
        <QuizLayout
          gradientDirection={"top left"}
          balls={{
            rightBall: {
              size: { height: "500px", width: "500px" },
              position: { bottom: "-100px", right: "-200px" },
            },
          }}
          ResultComponent={
            <PriceRangeSlider
              headingText={"How much do you want to spend on items from these categories?"}
            />
          }
        />
      )} */}
      {slideCount === 13 && (
        <QuizLayout
          gradientDirection={"top left"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-450px", left: "-250px" },
            },
            rightBall: {
              size: { height: "300px", width: "300px" },
              position: { bottom: "30px", right: "-200px" },
            },
          }}
          ResultComponent={
            <ClothStyleCard
              subHeadingText={"Let’s look at some examples!"}
              headingText={"Which one would you describe as your style?"}
              instructionText={"You can select Multiple"}
            />
          }
        />
      )}
      {slideCount === 14 && (
        <QuizLayout
          gradientDirection={"top left"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-450px", left: "-250px" },
            },
            rightBall: {
              size: { height: "300px", width: "300px" },
              position: { bottom: "30px", right: "-200px" },
            },
          }}
          ResultComponent={
            <BasicQuiz
              subHeadingText={"Ocassion or not, you deserve the best!"}
              headingText={"Are you shopping for a special ocassion?"}
              buttonDirection="column"
              buttonContent={["Yes", "No"]}
            />
          }
        />
      )}
      {slideCount === 15 && (
        <QuizLayout
          gradientDirection={"top left"}
          balls={{
            leftBall: {
              size: { height: "650px", width: "650px" },
              position: { bottom: "-450px", left: "-250px" },
            },
            rightBall: {
              size: { height: "300px", width: "300px" },
              position: { bottom: "30px", right: "-200px" },
            },
          }}
          ResultComponent={
            <BasicQuiz
              subHeadingText={"What’s the special ocassion?"}
              headingText={"Are you shopping for a specific ocassion?"}
              buttonDirection="row"
              buttonContent={[
                "Birthday",
                "Graduation",
                "Bridal Shower",
                "Bachelorette",
                "Date Night",
                "Concert",
                "Beach Vacation",
                "Party",
                "Elevated Basics",
                "Others",
              ]}
            />
          }
        />
      )}
    </Box>
  );
};

export default LeaQuiz;
