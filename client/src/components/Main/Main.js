import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import About from "../About/About";
import HomePage from "../HomePage/HomePage";
import PrivateRoute from "../routing/PrivateRoute";
import EditProject from "../Project/EditProject";
import CreateProject from "../Project/CreateProject";
import ProjectsList from "../Project/ProjectList";
import Demarche from "../Demarche/Demarche";
import PartiePrenante from "../DemarcheMain/PartiePrenante/PartiePrenante";
import Besoins from "../DemarcheMain/Besoins/Besoins";

const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/home" component={HomePage} />
        <PrivateRoute exact path="/edit/:id" component={EditProject} />
        <PrivateRoute exact path="/create" component={CreateProject} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute path="/demarche" component={Demarche} />
        <PrivateRoute exact path="/project" component={ProjectsList} />
      </Switch>
    </div>
  );
};

export default Main;
