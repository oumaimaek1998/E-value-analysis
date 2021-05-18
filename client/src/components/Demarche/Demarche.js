import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import DemarcheMain from "../DemarcheMain/DemarcheMain";
import "./Demarche.css";
import { withRouter } from "react-router-dom";

const Demarche = () => (
  <div className="demarche-screen">
    <div className="demarche-box">
      <div className="body-class-demarche">
        <Sidebar />
        <DemarcheMain />
      </div>
    </div>
  </div>
);

export default withRouter(Demarche);
