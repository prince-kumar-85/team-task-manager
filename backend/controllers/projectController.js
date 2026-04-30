const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({ msg: "Only Admin can create project" });
    }

    const project = await Project.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("members", "name email role");

    res.json(projects);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};