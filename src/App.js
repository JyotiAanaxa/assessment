import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assessment from "../src/pages/Assessment";
import Startpage from "../src/pages/Startpage";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Startpage />} exact />
          <Route path="/assessment" element={<Assessment />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
