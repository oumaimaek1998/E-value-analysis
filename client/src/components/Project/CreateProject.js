import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./Project.css";
import { withRouter } from "react-router-dom";

class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDateStart = this.onChangeDateStart.bind(this);
    this.onChangeDateEnd = this.onChangeDateEnd.bind(this);
    this.onChangeObservation = this.onChangeObservation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      description: "",
      start_date: new Date(),
      end_date: "",
      observation: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDateEnd(date) {
    this.setState({
      end_date: date,
    });
  }

  onChangeDateStart(date) {
    this.setState({
      date: date,
    });
  }

  onChangeObservation(e) {
    this.setState({
      observation: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const project = {
      name: this.state.name,
      description: this.state.description,
      end_date: this.state.end_date,
      start_date: this.state.start_date,
      observation: this.state.observation,
    };

    console.log(project);

    axios.post("projects/add", project).then((res) => console.log(res.data));

    window.location = "/project";
  }

  render() {
    return (
      <div className="create-page">
        <form onSubmit={this.onSubmit} className="create-page-form">
          <h3>Nouveau projet</h3>
          <div className="form-group">
            <label>Nom du projet </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Description </label>
            <input
              type="text"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Date </label>
            <div>
              <DatePicker
                selected={this.state.start_date}
                onChange={this.onChangeDateStart}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Date de Fin</label>
            <div>
              <DatePicker
                selected={this.state.end_date}
                onChange={this.onChangeDateEnd}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Observation</label>
            <input
              type="text"
              value={this.state.observation}
              onChange={this.onChangeObservation}
            />
          </div>

          <div>
            <input className="btn-primary" type="submit" value="Créer" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateProject);
