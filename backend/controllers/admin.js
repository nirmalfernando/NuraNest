const Admin = require("../models/Admin.js");

// Create a new Admin
exports.createAdmin = async (req, res) => {
  const { userId } = req.body;

  try {
    const admin = await Admin.create({
      userId,
      role: "admin",
      status: true,
    });

    console.log("Admin has been created successfully");
    return res.status(201).json({ admin });
  } catch (error) {
    console.error("Error creating the admin", error);
    return res.status(500).json({
      message: "Unable to create the admin",
      error: error.message,
    });
  }
};

// Get all Admins
exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();

    console.log("Admins have been retrieved successfully");
    return res.status(200).json({ admins });
  } catch (error) {
    console.error("Error getting the admins", error);
    return res.status(500).json({
      message: "Unable to get the admins",
      error: error.message,
    });
  }
};

// Get a single Admin
exports.getAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findByPk(id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    console.log("Admin has been retrieved successfully");
    return res.status(200).json({ admin });
  } catch (error) {
    console.error("Error getting the admin", error);
    return res.status(500).json({
      message: "Unable to get the admin",
      error: error.message,
    });
  }
};

// Delete a Admin (soft-delete)
exports.deleteAdmin = async (req, res) => {
    const { id } = req.params;

    try {
      const admin = await Admin.findByPk(id);
  
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
  
      admin.status = false;
      await admin.save();
  
      console.log("Admin has been deleted successfully");
      return res.status(200).json({ admin });
    } catch (error) {
      console.error("Error deleting the admin", error);
      return res.status(500).json({
        message: "Unable to delete the admin",
        error: error.message,
      });
    }
};