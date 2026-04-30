const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ✅ SIGNUP
exports.signup = async (req, res) => {
  try {

    const {
      name,
      email,
      password,
      role,
      adminSecret
    } = req.body;

    // Check existing user
    const exist = await User.findOne({ email });

    if (exist) {
      return res.status(400).json({
        msg: "User already exists"
      });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Default role
    let finalRole = "Member";

    // Admin verification
    if (role === "Admin") {

      if (
        adminSecret !== process.env.ADMIN_SECRET
      ) {
        return res.status(403).json({
          msg: "Invalid admin secret"
        });
      }

      finalRole = "Admin";
    }

    // Create user
    await User.create({
      name,
      email,
      password: hashed,
      role: finalRole
    });

    res.status(201).json({
      msg: "Signup successful"
    });

  } catch (err) {

    res.status(500).json({
      msg: err.message
    });

  }
};


// ✅ LOGIN
exports.login = async (req, res) => {
  try {

    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        msg: "Invalid credentials"
      });
    }

    // Compare password
    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return res.status(400).json({
        msg: "Invalid credentials"
      });
    }

    // Generate token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    res.json({ token });

  } catch (err) {

    res.status(500).json({
      msg: err.message
    });

  }
};


// ✅ GET PROFILE
exports.getProfile = async (req, res) => {
  try {

    const user = await User.findById(
      req.user.id
    ).select("-password");

    res.json(user);

  } catch (err) {

    res.status(500).json({
      msg: err.message
    });

  }
};


// ✅ GET ALL USERS
exports.getUsers = async (req, res) => {
  try {

    const users = await User.find()
      .select("-password");

    res.json(users);

  } catch (err) {

    res.status(500).json({
      msg: err.message
    });

  }
};