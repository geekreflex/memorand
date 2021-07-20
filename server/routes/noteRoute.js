const express = require("express");

const { createNote, getUserNote } = require("../controllers/noteController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, createNote);
router.get("/", protect, getUserNote);

module.exports = router;
