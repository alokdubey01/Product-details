import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/details/:_id" element={<Details />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
