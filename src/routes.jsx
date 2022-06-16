import Loadable from "./components/ui/Loadable";
import { lazy } from "react";

const LeaQuiz = Loadable(lazy(() => import("./pages/LeaQuiz/LeaQuiz")));
const Recommendation = Loadable(
  lazy(() => import("./pages/ProductRecommendation/ProductRecommendation"))
);

const routes = [
  {
    path: "",
    element: <LeaQuiz />,
  },
  {
    path: "/recommendation",
    element: <Recommendation />,
  },
];

export default routes;
