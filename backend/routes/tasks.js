const router = require("express").Router();
const auth = require("../middleware/auth");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getSingleTask
} = require("../controllers/taskController");


router.post("/", auth, createTask);

router.get("/", auth, getTasks);


router.get("/:id", auth, getSingleTask);

router.put("/:id", auth, updateTask);

router.delete("/:id", auth, deleteTask);

module.exports = router;