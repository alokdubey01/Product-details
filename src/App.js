import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import FrndQuiz from "./components/FrndQuiz";
import Home from "./components/Home";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route path="/Friendship" element={<FrndQuiz />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
