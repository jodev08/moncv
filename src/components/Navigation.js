import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <img src="./media/image_cv.jpeg" alt="photo-accueil" />
        <h3>Stonska Jordan</h3>
      </div>

      <div className="navigation">
        <ul>
          <NavLink exact to="/" activeClassName="navActive">
            <span>Accueil</span>
          </NavLink>

          <NavLink exact to="/competences" activeClassName="navActive">
            <span>Compétences</span>
          </NavLink>

          <NavLink exact to="/experiences" activeClassName="navActive">
            <span>Expériences</span>
          </NavLink>

          <NavLink exact to="/contact" activeClassName="navActive">
            <span>Contact</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
