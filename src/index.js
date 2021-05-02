import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./style/global/Global";
import Store from "./utils/Store";

ReactDOM.render(
  <Store>
    <App />
    <GlobalStyle />
  </Store>,
  document.getElementById("root")
);

reportWebVitals();
