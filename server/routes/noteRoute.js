const express = require("express");

const {
  createNote,
  getUserNote,
  deleteNote,
  setNoteColor,
} = require("../controllers/noteController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, createNote);
router.get("/", protect, getUserNote);
router.put("/:id/color", protect, setNoteColor);
router.delete("/:id", protect, deleteNote);

module.exports = router;
