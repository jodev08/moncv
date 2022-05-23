import React from "react";
import Navigation from "../components/Navigation";
import Language from "../components/competences/Language";
import Autre from "../components/competences/Autre";
import Skills from "../components/competences/Skills";
import Framework from "../components/competences/Framework";

const Competences = () => {
  return (
    <div className="competences">
      <Navigation></Navigation>
      <div className="competencesContent">
        <Language></Language>
        <Framework></Framework>
        <Autre></Autre>
        <Skills></Skills>
      </div>
    </div>
  );
};

export default Competences;
