import React from "react";
import { Divider, InputAdornment, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Otherquizes from "./Otherquizes";
import About from "./About";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function quizClick(){
    navigate('/Friendship')
  }

  return (
    <>
      <div className="border-dashed border-2 border-gray-200 rounded-lg col-md-3 mt-4 w-full md:w-1/2 lg:w-1/3 mx-auto p-2">
        <div className="header">
          <img
            className="h-30 w-28 mx-auto"
            src="https://cdn.pixabay.com/photo/2012/04/18/19/51/blindfolded-37705__480.png"
            alt="icon"
          />
          <h1 className="text-center text-3xl font-serif font-semibold">
            Check Your YaariScore
          </h1>
        </div>
        <form className="mt-6 mx-10">
          <TextField
            sx={{ marginLeft: "auto", width: "100%" }}
            id="input"
            placeholder="Enter Your Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <button onClick={quizClick} className="button bg-green-400 w-1/2 p-1 px-3 mt-4 rounded-full mx-20 text-white font-semibold">
            Submit
          </button>
        </form>
        <section className="how-to mt-5 text-center">
          <h3 className="font-semibold">
            How to check that who knows you best ?
          </h3>
          <ul
            className="text-start mx-10"
            style={{ listStyle: "disc", lineHeight: "32px" }}
          >
            <li>Enter your name.</li>
            <li>Answer any 20 Questions about yourself.</li>
            <li>Your quiz-link will be ready.</li>
            <li>Share your quiz-link with your friends.</li>
            <li>Your friends will try to guess the right answers.</li>
            <li>Check the score of your friends at your quiz-link!</li>
            <li>Share this result screenshot on whatsapp.</li>
          </ul>
        </section>
        {/* <Divider sx={{ mt: 4 }} />
        <Otherquizes /> */}
      </div>
      <About />
    </>
  );
}
