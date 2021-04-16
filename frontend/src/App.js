import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Index}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
