import Loadable from "./components/ui/Loadable";
import { lazy } from "react";

const Persoanlize = Loadable(lazy(() => import("./components/Personalize")));

const routes = [
  {
    path: "",
    element: <Persoanlize />,
  },
];

export default routes;
