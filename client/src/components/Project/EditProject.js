import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from "react-router-dom";

class EditProject extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
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

  componentDidMount() {
    axios
      .get("/projects/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          description: response.data.description,
          observation: response.data.observation,
          start_date: new Date(response.data.start_date),
          end_date: new Date(response.data.end_date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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

  onChangeStartDate(start_date) {
    this.setState({
      start_date: start_date,
    });
  }
  onChangeEndDate(end_date) {
    this.setState({
      end_date: end_date,
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
      observation: this.state.observation,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };

    axios
      .post("/projects/update/" + this.props.match.params.id, project)
      .then((res) => console.log(res.data));

    this.props.history.push("/project");
  }

  render() {
    return (
      <div className="create-page">
        <form className="create-page-form" onSubmit={this.onSubmit}>
          <h3>Modifier un projet</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Date de début </label>
            <div>
              <DatePicker
                selected={this.state.start_date}
                onChange={this.onChangeStartDate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Date de fin </label>
            <div>
              <DatePicker
                selected={this.state.end_date}
                onChange={this.onChangeEndDate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Observation</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.observation}
              onChange={this.onChangeObservation}
            />
          </div>

          <div className="btn-primary">
            <input type="submit" value="Modifier" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EditProject);
