import React from "react";
import Navigation from "../components/Navigation";

const Accueil = () => {
  return (
    <div className="accueil">
      <Navigation></Navigation>

      <div className="accueilContent">
        <h1>Stonska Jordan</h1>
        <h2>Développeur</h2>
        <div className="pdf">
          <a href="./media/CV_StonskaJordan.pdf" target="_blank">
            Télécharger cv
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
