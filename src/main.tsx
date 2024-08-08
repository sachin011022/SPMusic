import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryProvider } from "./react-query/QueryProvider.tsx";
import SongDataProvider from "./context/SongDataProvider.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryProvider>
      <SongDataProvider>
        <App />
      </SongDataProvider>
    </QueryProvider>
  </BrowserRouter>
);
