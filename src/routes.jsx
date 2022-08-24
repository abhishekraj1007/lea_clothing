import Loadable from "./components/ui/Loadable";
import { lazy } from "react";

const Persoanlize = Loadable(lazy(() => import("./components/Personalize")));
const StyleProductTable = Loadable(
  lazy(() => import("./pages/StyleProductTable/StyleProductTable"))
);
// const AddEditStyleProduct = Loadable(lazy(() => import("./pages/StyleProductTable/AddEditStyleProduct")));

const routes = [
  {
    path: "",
    element: <Persoanlize />,
  },
  {
    path: "/style-product",
    element: <StyleProductTable />,
  },
  // {
  //   path: "/style-product/:rowID/edit",
  //   element: <AddEditStyleProduct />,
  // },
];

export default routes;
