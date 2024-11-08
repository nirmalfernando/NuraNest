import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";

// Update a user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    gender,
    dob,
    address,
    contactNo,
  } = req.body;

  try {
    // Find the user by ID
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the fields if they are provided
    if (username) {
      user.username = username;
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      const salt = bcrypt.genSaltSync(12);
      const hashedPassword = bcrypt.hashSync(password, salt);
      user.password = hashedPassword;
    }

    if (firstName) {
      user.firstName = firstName;
    }

    if (lastName) {
      user.lastName = lastName;
    }

    if (gender) {
      user.gender = gender;
    }

    if (dob) {
      user.dob = dob;
    }

    if (address) {
      user.address = address;
    }

    // Save the updated user
    await user.save();

    console.log("User updated successfully");
    return res.status(200).json({ message: "User updated", user });
  } catch (error) {
    console.error("Error in updating a user: ", error);
    return res
      .status(500)
      .json({ message: "Unable to update user", error: error.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    // Find the user with the status filter
    const users = await User.findAll({ where: { status: true } });

    console.log("Users fetched successfully");
    return res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users", error);
    return res
      .status(500)
      .json({ message: "Unable to get users", error: error.message });
  }
};

// Get a user by ID
exports.getUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the user by ID
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User fetched successfully");
    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching the user", error);
    return res
      .status(500)
      .json({ message: "Unable to get the user", error: error.message });
  }
};

// Delete a user (set status to false)
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the user by ID
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Set user status to inactive/false
    user.status = false;
    await user.save();

    console.log("User deleted successfully");
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting the user", error);
    return res
      .status(500)
      .json({ message: "Unable to delete the user", error: error.message });
  }
};
