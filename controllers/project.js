const Project = require("../models/Project");

exports.projects = async (req, res) => {
  Project.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json("Error" + err));
};

exports.addProject = async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const observation = req.body.observation;
  const start_date = Date.parse(req.body.start_date);
  const end_date = Date.parse(req.body.end_date);

  const newProject = new Project({
    name,
    description,
    start_date,
    end_date,
    observation,
  });

  newProject
    .save()
    .then(() => res.json("Project added!"))
    .catch((err) => res.status(400).json("Error " + err));
};

exports.deleteProject = async (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("Project deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getProject = async (req, res) => {
  Project.findById(req.params.id)
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateProject = async (req, res) => {
  Project.findById(req.params.id)
    .then((project) => {
      project.name = req.body.name;
      project.description = req.body.description;
      project.end_date = Date.parse(req.body.end_date);
      project.start_date = Date.parse(req.body.start_date);
      project.observation = req.body.observation;

      project
        .save()
        .then(() => res.json("Project updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
