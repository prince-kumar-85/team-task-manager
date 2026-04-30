const router = require("express").Router();
const auth = require("../middleware/auth");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getSingleTask
} = require("../controllers/taskController");


// ✅ Create Task
router.post("/", auth, createTask);

// ✅ Get All Tasks
router.get("/", auth, getTasks);

// ✅ Get Single Task
router.get("/:id", auth, getSingleTask);

// ✅ Update Task
router.put("/:id", auth, updateTask);

// ✅ Delete Task (Admin only)
router.delete("/:id", auth, deleteTask);

module.exports = router;