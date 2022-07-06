import Loadable from "./components/ui/Loadable";
import { lazy } from "react";

// const LeaQuiz = Loadable(lazy(() => import("./pages/LeaQuiz/LeaQuiz")));
// const Recommendation = Loadable(
//   lazy(() => import("./pages/ProductRecommendation/ProductRecommendation"))
// );
const Persoanlize = Loadable(lazy(() => import("./components/Personalize")));
const Recommend = Loadable(lazy(() => import("./pages/Recommend/Recommend")));

const routes = [
  {
    path: "",
    element: <Persoanlize />,
  },
  // {
  //   path: "/recommendation",
  //   element: <Recommendation />,
  // },
  {
    path: "/recommend/:title",
    element: <Recommend />,
  },
];

export default routes;
