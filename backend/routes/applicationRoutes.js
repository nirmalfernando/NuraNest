const {
  createApplication,
  updateApplication,
  getApplicationById,
  getApplications,
  deleteApplication,
} = require("../controllers/application.js");
const express = require("express");
const { verifyToken } = require("../middlewares/authRole.js");

const router = express.Router();

// Create a new Application
router.post("/", verifyToken, createApplication);

// Update an existing Application
router.put("/:id", verifyToken, updateApplication);

// Get an Application by ID
router.get("/:id", verifyToken, getApplicationById);

// Get all Applications
router.get("/", verifyToken, getApplications);

// Delete an Application
router.delete("/:id", verifyToken, deleteApplication);

module.exports = router;
