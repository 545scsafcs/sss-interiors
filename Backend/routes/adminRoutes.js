const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  loginAdmin,
  getAdminProfile,
} = require("../controllers/adminController");

// Public route: Login
router.post("/login", loginAdmin);

// Protected route: Get admin profile
router.get("/profile", protect, getAdminProfile);

module.exports = router;