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
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <span>Accueil</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <span>Compétences</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/experiences" activeClassName="navActive">
              <span>Expériences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>

        <div className="social">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jodev08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="fab fa-github"></li>
              </a>
            </li>
          </ul>
        </div>

        <div className="signature">
          <p>Stonska Jordan - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
