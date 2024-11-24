import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/style.css";
import { LanguageContextProvider } from "./context/language_context.tsx";
import { ThemeContextProvider } from "./context/theme.context.tsx";
import "react-modern-drawer/dist/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <LanguageContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </LanguageContextProvider>
);
