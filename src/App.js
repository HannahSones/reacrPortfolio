import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Routing from "./routes/routing";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Routing />
      </div>
    </HashRouter>
  );
}

export default App;
