import React from "react";
import { Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />}></Route>
      <Route path="/competences" element={<Competences />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/experiences" element={<Experiences />}></Route>
    </Routes>
  );
};

export default App;
