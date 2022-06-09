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
  ProgessBarWithLabel,
} from "./components";
import { useSelector } from "react-redux";

const LeaQuiz = () => {
  const slideCount = useSelector((state) => state.leaQuiz.slideCount);

  return (
    <Box>
      <ProgessBarWithLabel />
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
            <BasicQuiz
              subHeadingText={"Life is too short to wear boring clothes."}
              headingText={"Let's start easy, what brings you here today?"}
              buttonDirection="row"
              buttonContent={[
                "I'm interested in trying corsets.",
                "I've worn all my clothes to death and need an upgrade.",
                "I've recently had new changes to my body and am looking to find my ideal fit.",
                "Just browsing.",
              ]}
              values={[
                "I'm interested in trying corsets.",
                "I've worn all my clothes to death and need an upgrade.",
                "I've recently had new changes to my body and am looking to find my ideal fit.",
                "Just browsing.",
              ]}
              progress={5}
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
              values={["Yes", "No"]}
              progress={5}
              prevProgress={5}
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
              headingText={"Let’s find your perfect fit!."}
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
              subHeadingText={
                "I would call my fashion style “clothes that fit!”"
              }
              headingText={"Could we get your digits?"}
              instructionText={"All sizes are in Inches"}
              progress={10}
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
              subHeadingText={"Bodies come in many shapes"}
              headingText={"How would you describe yours?"}
              progress={10}
              prevProgress={10}
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
              progress={5}
              prevProgress={10}
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
              progress={5}
              prevProgress={5}
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
              headingText={
                "Would you say you're vertically gifted or efficient?"
              }
              buttonDirection="row"
              buttonContent={[
                "Petite (5.3 and under)",
                "Average (5.4 - 5.7)",
                "Tall (5.8 and above)",
              ]}
              values={["Petite", "Average", "Tall"]}
              progress={10}
              prevProgress={5}
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
              instructionText={"Pick as many as you'd like!"}
              progress={10}
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
              values={["Yes", "No"]}
              progress={5}
              prevProgress={10}
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
              instructionText={"No pressure, you can select more than one."}
              progress={5}
              prevProgress={5}
            />
          }
        />
      )}
      {slideCount === 13 && (
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
              subHeadingText={
                "I like my money right where I can see it, hanging in my closet. - Carrie Bradshaw"
              }
              headingText={
                "How much do you want to spend on items from these categories?"
              }
              progress={10}
              prevProgress={5}
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
            <ClothStyleCard
              subHeadingText={
                "Style is a way to say who you are without having to speak. - Rachel Zoe "
              }
              headingText={"Which one would you describe as your style?"}
              instructionText={"No pressure, you can select more than one."}
              progress={10}
              prevProgress={10}
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
              subHeadingText={"Main character Energy TM"}
              headingText={"Are you shopping for a special ocassion?"}
              buttonDirection="column"
              buttonContent={["Yes", "No"]}
              values={["Yes", "No"]}
              progress={5}
              prevProgress={10}
            />
          }
        />
      )}
      {slideCount === 16 && (
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
                "There are exactly as many special occasions in life as we choose to celebrate. - Robert Breault"
              }
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
              values={[
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
              progress={5}
              prevProgress={5}
            />
          }
        />
      )}
    </Box>
  );
};

export default LeaQuiz;
