const {
  updateUser,
  getUsers,
  getUser,
  deleteUser,
} = require("../controllers/user.js");
const express = require("express");

const router = express.Router();

// Update a user
router.put("/:id", updateUser);

// Get all users
router.get("/", getUsers);

// Get a user by ID
router.get("/:id", getUser);

// Delete a user
router.delete("/id", deleteUser);

module.exports = router;
