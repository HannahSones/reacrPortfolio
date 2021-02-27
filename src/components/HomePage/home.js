import React from "react";
import Banner from "../Banner/banner";
import Profile from "../Profile/profile";
import Projects from "../Projects/projects";
import Skillset from "../Skillset/skillset";
import ScrollBar from "../Parallax/parallaxBar";

function Home() {
  return (
    <div>
      <Banner />
      <Profile />
      <Projects />
      <Skillset />
      <ScrollBar />
    </div>
  );
}

export default Home;
