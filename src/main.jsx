import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "./context/DarkModeProvider";
import { Provider } from "react-redux";
import store from "./redux/store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
