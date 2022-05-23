import React from "react";
import ExperienceProfessionnel from "../components/experiences/ExperienceProfessionnel";
import Formation from "../components/experiences/Formation";
import Navigation from "../components/Navigation";

const Experiences = () => {
  return (
    <div className="experiences">
      <Navigation></Navigation>
      <div className="experiencesContent">
        <ExperienceProfessionnel></ExperienceProfessionnel>
        <Formation></Formation>
      </div>
    </div>
  );
};

export default Experiences;
