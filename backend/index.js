const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./connect.js");
const cookieParser = require("cookie-parser");
require("./models/associations.js");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
const appointmentRoutes = require("./routes/appointmentRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");

dotenv.config();

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    await sequelize.sync({ force: false });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initializeDatabase();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// setup the routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/admin", adminRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/payments", paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
