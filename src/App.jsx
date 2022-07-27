import { AppProvider as PolarisProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";

import { HomePage } from "./components/HomePage";

export default function App() {
  return (
    <PolarisProvider i18n={translations}>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <HomePage />
        </ReduxProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
