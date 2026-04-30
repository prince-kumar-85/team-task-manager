const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

// 👇 IMPORTANT: import controller functions
const {
  signup,
  login,
  getProfile,
  getUsers
} = require("../controllers/authController"); // or your file name

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", auth, getProfile);
router.get("/users", auth, getUsers);

module.exports = router;