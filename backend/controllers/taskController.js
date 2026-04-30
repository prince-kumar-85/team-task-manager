const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({ msg: "Only Admin can create tasks" });
    }

    const {
      title,
      description,
      status,
      dueDate,
      assignedTo,
      project
    } = req.body;

    if (!title) {
      return res.status(400).json({ msg: "Task title is required" });
    }

    const taskData = {
      title,
      description,
      status,
      createdBy: req.user.id
    };

    // ✅ Only add ObjectId fields if value exists
    if (assignedTo) {
      taskData.assignedTo = assignedTo;
    }

    if (project) {
      taskData.project = project;
    }

    if (dueDate) {
      taskData.dueDate = dueDate;
    }

    const task = await Task.create(taskData);

    const populatedTask = await Task.findById(task._id)
      .populate("assignedTo", "name email")
      .populate("project", "title");

    res.status(201).json(populatedTask);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    let tasks;

    if (req.user.role === "Admin") {
      tasks = await Task.find()
        .populate("assignedTo", "name email")
        .populate("project", "title");
    } else {
      tasks = await Task.find({ assignedTo: req.user.id })
        .populate("assignedTo", "name email")
        .populate("project", "title");
    }

    res.json(tasks);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    if (
      req.user.role !== "Admin" &&
      task.assignedTo &&
      task.assignedTo.toString() !== req.user.id
    ) {
      return res.status(403).json({ msg: "Access denied" });
    }

    const updateData = { ...req.body };

    // ✅ Remove empty ObjectId values
    if (updateData.project === "") {
      delete updateData.project;
    }

    if (updateData.assignedTo === "") {
      delete updateData.assignedTo;
    }

    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    )
      .populate("assignedTo", "name email")
      .populate("project", "title");

    res.json(updated);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
exports.getSingleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate("assignedTo", "name email")
      .populate("project", "title");

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({ msg: "Only Admin can delete tasks" });
    }

    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json({ msg: "Task deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};