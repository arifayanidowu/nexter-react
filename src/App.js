import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Realtors from "./components/Realtors";
import Features from "./components/Features";
import StoryPictures from "./components/StoryPictures";
import StoryContent from "./components/StoryContent";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
    </div>
  );
}

export default App;
