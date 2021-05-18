const router = require("express").Router();
const {
  projects,
  addProject,
  updateProject,
  deleteProject,
  getProject,
} = require("../controllers/project");

router.route("/").get(projects);

router.route("/:id").get(getProject);

router.route("/add").post(addProject);

router.route("/update/:id").post(updateProject);

router.route("/:id").delete(deleteProject);

module.exports = router;
