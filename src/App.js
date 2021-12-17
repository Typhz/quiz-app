import React from "react";
import RoutesConfig from "./routes";
import history from "./services/history";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <Router history={history}>
      <GlobalStyle/>
      <RoutesConfig />
    </Router>
  );
}

export default App;