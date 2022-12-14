import { Box } from "@mui/material";
import QuizLayout from "../../components/layout/QuizLayout/QuizLayout";
import GlobalLoading from "../../components/ui/GlobalLoading";
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
  UserDetails,
  MultipleSelectBasicQuiz,
} from "./components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// //Style Slide 1 Images
// import PixieBabyBlue from "../../assets/Pixie Baby Blue.webp";
// import LavenderTatiana from "../../assets/Lavender Tatiana.webp";
// import TwylaMeshCorsetTee from "../../assets/Twyla Mesh Corset Tee.webp";
// import CarlaMauve from "../../assets/Carla Mauve.webp";
// import CadyRegina from "../../assets/Cady + Regina.webp";
// import MiaDress from "../../assets/Mia Dress.webp";
// //Style Slide 2 Images
// import SashaWhite from "../../assets/Sasha White.webp";
// import CassidyCorsetBeltGiselleTop from "../../assets/Cassidy Corset Belt + Giselle Top.webp";
// import GenevieveDress from "../../assets/Genevieve Dress.webp";
// import IreneEstrella from "../../assets/Irene + Estrella.webp";
// import BrieBrielleBettySet from "../../assets/Brie, Brielle, Betty Set.webp";
// import BabyPinkSchiffliPixie from "../../assets/Baby Pink Schiffli Pixie.webp";
// ///Style Slide 3 Images
// import AnastasiaGown from "../../assets/Anastasia Gown.webp";
// import CamilleOrganzaDress from "../../assets/Camille Organza Dress.webp";
// import BelleLavender from "../../assets/Belle Lavender.webp";
// import ReeseDress from "../../assets/Reese Dress.webp";
// import CalliopeTop from "../../assets/Calliope Top.webp";
// import DonnaJessica from "../../assets/Donna + Jessica.webp";
// ///Style Slide 4 Images
// import AltheaLavenderGown from "../../assets/Althea Lavender Gown.webp";
// import KaiaKaylaSet from "../../assets/Kaia + Kayla Set.webp";
// import TwylaDaisyAvaJeans from "../../assets/Twyla Daisy + Ava Jeans.webp";
// import DiannaCorset from "../../assets/Dianna Corset.webp";
// import LauraCharliePants from "../../assets/Laura + Charlie Pants.webp";
// import RainRileyRory from "../../assets/Rain, Riley, Rory.webp";
// ///Style Slide 5 Images
// import IsabelleDress from "../../assets/Isabelle Dress.webp";
// import CarlaBlack from "../../assets/Carla Black.webp";
// import StacyLoungeSet from "../../assets/Stacy Lounge Set.webp";
// import AnnaliseDress from "../../assets/Annalise Dress.webp";
// import FleurFreya from "../../assets/Fleur + Freya.webp";
// import CarinaSet from "../../assets/Carina Set.webp";
// ///Style Slide 6 Images
// import ReinaRamona from "../../assets/Reina + Ramona.webp";
// import DixieCorsetEvieJeans from "../../assets/Dixie Corset + Evie Jeans.webp";
// import ElianaCarmen from "../../assets/Eliana + Carmen.webp";
// import SashaBlush from "../../assets/Sasha Blush.webp";
// import MaiaLinenDress from "../../assets/Maia Linen Dress.webp";
// import KendallHailey from "../../assets/Kendall + Hailey.webp";

import StyleProductApi from "../../services/api/StyleProductApi";
import { styleProductActions } from "../StyleProductTable/store/slice/styleProductSlice";

const LeaQuiz = () => {
  const dispatch = useDispatch();
  const slideCount = useSelector((state) => state.leaQuiz.slideCount);
  const loading = useSelector((state) => state.leaQuiz.loading);
  const retake = useSelector((state) => state.leaQuiz.isRetake);
  const styleSlides = useSelector((state) => state.styleProduct.slideStyles);

  useEffect(async () => {
    try {
      const resData = await StyleProductApi.getAllStyles();

      if (resData) {
        // console.log("resData+++", resData);
        let updateArray = resData;
        dispatch(styleProductActions.updateStyleProduct({ updateArray }));
        dispatch(styleProductActions.updateSlideStyles({ updateArray }));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const validateRegex = (value, regex) => {
    const re = new RegExp(regex);
    return re.test(value);
  };

  return (
    <Box>
      {loading ? <GlobalLoading /> : <ProgessBarWithLabel />}
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
            <MultipleSelectBasicQuiz
              subHeadingText={"Life is too short to wear boring clothes."}
              headingText={"Let’s start easy—What brings you to Lea?"}
              buttonDirection="row"
              buttonContent={[
                "I've worn all my clothes to death and need an upgrade.",
                "I've recently had new changes to my body and am looking to find my ideal fit.",
                "I'm interested in trying corsets.",
                "Looking to revamp my ethnic wardrobe.",
                "Browsing for Bridesmaid/Wedding Duty.",
                "Just browsing.",
              ]}
              values={[
                "I've worn all my clothes to death and need an upgrade.",
                "I've recently had new changes to my body and am looking to find my ideal fit.",
                "I'm interested in trying corsets.",
                "Looking to revamp my ethnic wardrobe.",
                "Browsing for Bridesmaid/Wedding Duty.",
                "Just browsing.",
              ]}
              progress={retake ? 10 : 5}
              isSkippable={false}
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
              isSkippable={false}
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
              headingText={"Let’s find your perfect fit!"}
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
              instructionText={"All sizes are in"}
              boldText={"Inches"}
              progress={10}
              prevProgress={retake ? 10 : 5}
              isSkippable={false}
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
              progress={5}
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
              prevProgress={5}
              values={[
                "Corset, Bodycon, Crop Top",
                "Sleeveless",
                "Mini",
                "Backless",
                "Skater, Longline, Peplum",
              ]}
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
              values={["Waist", "Arms", "Legs", "Back", "Stomach/Hips"]}
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
              progress={5}
              prevProgress={5}
              isSkippable={true}
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
              progress={5}
              prevProgress={5}
              isSkippable={false}
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
              headingText={"Are you a fan of prints or embroideries?"}
              buttonDirection="column"
              buttonContent={["Yes", "No"]}
              values={["Yes", "No"]}
              progress={2}
              prevProgress={5}
              isSkippable={false}
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
              headingText={
                "What kind of prints and embroideries are you attracted to?"
              }
              instructionText={"No pressure, you can select more than one."}
              progress={3}
              prevProgress={2}
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
              prevProgress={3}
            />
          }
        />
      )}
      {/* {slideCount === 14 && (
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
              progress={5}
              prevProgress={10}
              items={[
                {
                  attribute: "Pixie Baby Blue",
                  value: "Pixie Powder Blue Puff Corset Dress",
                  imgUrl: PixieBabyBlue,
                },
                {
                  attribute: "Lavender Tatiana",
                  value: "Tatiana Ruched Midi Corset Dress",
                  imgUrl: LavenderTatiana,
                },
                {
                  attribute: "Twyla Mesh Corset Tee",
                  value: "Twyla Mesh Corset T-Shirt",
                  imgUrl: TwylaMeshCorsetTee,
                },
                {
                  attribute: "Carla Mauve",
                  value: "Carla Mauve Silk Corset Top",
                  imgUrl: CarlaMauve,
                },
                {
                  attribute: "Cady + Regina",
                  value: "Cady Baby Pink Velour Crop Hoodie",
                  imgUrl: CadyRegina,
                },
                {
                  attribute: "Mia Dress",
                  value: "Mia Baby Pink Lurex Jacquard Corset Gown",
                  imgUrl: MiaDress,
                },
              ]}
            />
          }
        />
      )} */}
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
              progress={5}
              prevProgress={10}
              items={[...styleSlides.slide1]}
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
            <ClothStyleCard
              subHeadingText={
                "Style is a way to say who you are without having to speak. - Rachel Zoe "
              }
              headingText={"Which one would you describe as your style?"}
              instructionText={"No pressure, you can select more than one."}
              progress={5}
              prevProgress={5}
              items={[...styleSlides.slide2]}
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
            <ClothStyleCard
              subHeadingText={
                "Style is a way to say who you are without having to speak. - Rachel Zoe "
              }
              headingText={"Which one would you describe as your style?"}
              instructionText={"No pressure, you can select more than one."}
              progress={5}
              prevProgress={5}
              items={[...styleSlides.slide3]}
            />
          }
        />
      )}
      {slideCount === 17 && (
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
              progress={5}
              prevProgress={5}
              items={[...styleSlides.slide4]}
            />
          }
        />
      )}
      {slideCount === 18 && (
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
              progress={5}
              prevProgress={5}
              items={[...styleSlides.slide5]}
            />
          }
        />
      )}
      {slideCount === 19 && (
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
              progress={5}
              prevProgress={5}
              items={[...styleSlides.slide6]}
            />
          }
        />
      )}
      {slideCount === 20 && (
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
              subHeadingText={"Main Character Energy"}
              supScriptTag={"TM"}
              headingText={"Are you shopping for a special ocassion?"}
              buttonDirection="column"
              buttonContent={["Yes", "No"]}
              values={["Yes", "No"]}
              progress={2}
              prevProgress={5}
              isSkippable={false}
            />
          }
        />
      )}
      {slideCount === 21 && (
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
            <MultipleSelectBasicQuiz
              subHeadingText={
                "There are exactly as many special occasions in life as we choose to celebrate. - Robert Breault"
              }
              headingText={"What occasion are you shopping for?"}
              buttonDirection="row"
              buttonContent={[
                "Birthday",
                "Graduation",
                "Mehendi/Haldi",
                "Bridal Shower/Bachelorette",
                "Cocktail",
                "Date Night",
                "Festive Wear",
                "Beach/Resort Wear",
                "Wedding Wear",
                "Party/Concert",
                "Elevated Basics",
              ]}
              values={[
                "Birthday",
                "Graduation",
                "Mehendi, Haldi",
                "Bridal Shower, Bachelorette",
                "Cocktail",
                "Date Night",
                "Festive Wear",
                "Beach, Resort Wear",
                "Wedding Wear",
                "Party, Concert",
                "Elevated Basics",
              ]}
              progress={3}
              prevProgress={2}
              isSkippable={false}
            />
          }
        />
      )}
      {slideCount === 22 && (
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
            <UserDetails
              subHeadingText={"It's the start of something new..."}
              headingText={"Can we be friends?"}
              instructionText={
                "Get Birthday love from Lea + first time customers get 10% off their first purchase!"
              }
              progress={5}
              prevProgress={3}
              validateRegex={validateRegex}
            />
          }
        />
      )}
    </Box>
  );
};

export default LeaQuiz;
