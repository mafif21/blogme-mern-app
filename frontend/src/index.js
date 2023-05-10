import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>Loading whale types...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
