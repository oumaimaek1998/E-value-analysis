import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { MaterialTable } from "../Table/MaterialTable";

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = { projects: [] };
  }

  componentDidMount() {
    axios
      .get("/projects")
      .then((response) => {
        this.setState({ projects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleRowDelete(oldData, resolve) {
    axios
      .delete("/projects/" + oldData._id)
      .then((res) => {
        const dataDelete = [...this.state.projects];
        const index = oldData._id;
        const newData = dataDelete.filter((project) => project._id != index);
        this.setState({ projects: newData });
        resolve();
      })
      .catch((error) => {
        console.log(error);
        resolve();
      });
  }

  render() {
    const columns = [
      { title: "Nom", field: "name" },
      { title: "Description", field: "description" },
      { title: "Date de début ", field: "start_date", type: "date" },
      { title: "Date de fin ", field: "end_date", type: "date" },
      { title: "Observation", field: "observation" },
    ];

    const data = this.state.projects;

    return (
      <div className="project-page">
        <div className="align">
          <h3>Liste des projets</h3>
          <button
            className="btn-primary"
            onClick={() => this.props.history.push("/create")}
          >
            Ajouter un projet
          </button>
        </div>
        <MaterialTable
          title="Liste des projets"
          columns={columns}
          data={data}
          onRowClick={(_, item) => {
            this.props.history.push("/demarche");
          }}
          editable={{
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                this.handleRowDelete(oldData, resolve);
              }),
          }}
          actions={[
            {
              icon: "edit",
              tooltip: "edit project",
              onClick: (_, rowData) =>
                this.props.history.push("/edit/" + rowData._id),
            },
          ]}
        />
      </div>
    );
  }
}

export default withRouter(ProjectList);
