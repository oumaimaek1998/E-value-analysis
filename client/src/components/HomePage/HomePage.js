import React from "react";
import { withRouter } from "react-router-dom";
import "./HomePage.css";
import logo from "../../assets/icons/home.jpg";

const HomePage = () => (
  <div className="global-page">
    <div className="home-screen">
      <img className="image-home" src={logo} alt="home" />
      <div className="txt_img">
        <div className="centered"> Plateforme d'analyse de la valeur</div>
        <div className="get-started">
          L’analyse de la valeur (AV), aussi appelée ingénierie de la valeur
          (IV), est une démarche systématique axée sur la fonction, visant
          l'accroissement de la valeur des produits, des projets ou des
          processus. L’analyse de la valeur fait appel à des techniques de
          créativité et d’analyse afin de proposer différentes possibilités pour
          atteindre ses objectifs.
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(HomePage);
