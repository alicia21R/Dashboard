import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Home,
  Main,
  IconCard

} from "./components"


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  </Router>,


  document.getElementById("root")
);

// MutateTheArray.Mutate();
