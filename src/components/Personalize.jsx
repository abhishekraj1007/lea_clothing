import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeaQuiz from "../pages/LeaQuiz/LeaQuiz";
import { leaQuizActions } from "../pages/LeaQuiz/store/slice/leaQuizSlice";
import ProductRecommendation from "../pages/ProductRecommendation/ProductRecommendation";

export default function Persoanlize() {
  const dispatch = useDispatch();
  const isQuizTaken = useSelector((state) => state.leaQuiz.isQuizTaken);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmailId");
    if (userEmail) {
      dispatch(leaQuizActions.updateQuizStatus(true));
    }
  }, []);

  return (
    <>
      {isQuizTaken && <ProductRecommendation />}
      {!isQuizTaken && <LeaQuiz />}
    </>
  );
}
