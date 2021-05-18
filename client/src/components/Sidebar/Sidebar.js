import React from "react";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { withRouter } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends Component {
  pushTo = (path) => {
    this.props.history.push(path);
  };
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-menu">
          <div class="dropdown">
            <button class="dropbtn">1. Elicitation des besoins</button>
            <div class="dropdown-content">
              <a onClick={() => this.pushTo("/demarche/prenante")}>
                1.1 Parties Prenantes
              </a>
              <a onClick={() => this.pushTo("/demarche/besoins")}>
                1.2 Récolter les besoins
              </a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">2 Structuration des besoins</button>
            <div class="dropdown-content">
              <a href="#">2.1 Arbre des besoins</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">3 Hiérarchisation des besoins </button>
            <div class="dropdown-content">
              <a href="#">3.1 Choix des critères</a>
              <a href="#">3.2 Comparaison par paires</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              4. Evaluation du projet (coûts-contribution)
            </button>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              5. Evaluation du projet (coûts-besoins)
            </button>
          </div>
          <div class="dropdown">
            <button class="dropbtn">6. Valorisation (besoins-projets)</button>
          </div>
          <div class="dropdown">
            <button class="dropbtn">7. Priorisation des besoins</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
