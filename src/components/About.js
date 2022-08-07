import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 w-1/2 mx-auto text-center rounded-sm mt-4 p-4">
      <h1 className="text-lg font-semibold">How it is work?</h1>
      <ul
        className="text-start mx-10"
        style={{ listStyle: "disc", lineHeight: "32px" }}
      >
        <li>Enter your name.</li>
        <li>Answer any 20 Questions about yourself.</li>
        <li>Your quiz-link will be ready.</li>
        <li>Share your quiz-link with your friends.</li>
        <li>Your friends will try to guess the right answers.</li>
        <li>All submitted answers will seen on your link address.</li>
        <li>Share this result screenshot on whatsapp.</li>
      </ul>

      {/* About Section */}
    </div>
  );
}
