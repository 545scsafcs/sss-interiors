const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createLead,
  getLeads,
  deleteLead,
} = require("../controllers/leadController");

// Public route: Create lead (for website form submissions)
router.post("/", createLead);

// Protected routes: Get and delete leads (admin only)
router.get("/", protect, getLeads);
router.delete("/:id", protect, deleteLead);

module.exports = router;