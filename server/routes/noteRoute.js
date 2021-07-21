const express = require("express");

const {
  createNote,
  getUserNote,
  deleteNote,
} = require("../controllers/noteController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, createNote);
router.get("/", protect, getUserNote);
router.delete("/:id", protect, deleteNote);

module.exports = router;
