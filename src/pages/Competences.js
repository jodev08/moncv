import React from "react";
import Navigation from "../components/Navigation";
import Language from "../components/competences/Language";
import Autre from "../components/competences/Autre";
import Skills from "../components/competences/Skills";

const Competences = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Language></Language>
      <Skills></Skills>
      <Autre></Autre>
    </div>
  );
};

export default Competences;
