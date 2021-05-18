import { withRouter, Switch } from "react-router-dom";
import "./DemarcheMain.css";
import PartiePrenante from "./PartiePrenante/PartiePrenante";
import PrivateRoute from "../routing/PrivateRoute";
import Besoins from "./Besoins/Besoins";

const DemarcheMain = (props) => {
  return (
    <div className="demarche-main">
      {/* <PrivateRoute exact path="/prenante" component={PartiePrenante} /> */}
      <PrivateRoute
        exact
        path="/demarche/prenante"
        component={PartiePrenante}
      />
      <PrivateRoute exact path="/demarche/besoins" component={Besoins} />
    </div>
  );
};

export default withRouter(DemarcheMain);
