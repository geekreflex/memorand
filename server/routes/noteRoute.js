const express = require('express');

const {
  createNote,
  getUserNote,
  deleteNote,
  setNoteColor,
  updateNote,
  trashNote,
  pinNote,
} = require('../controllers/noteController');

const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, createNote);
router.get('/', protect, getUserNote);
router.put('/:id/color', protect, setNoteColor);
router.put('/:id/pin', protect, pinNote);
router.put('/:id/trash', protect, trashNote);
router.put('/:id', protect, updateNote);
router.delete('/:id', protect, deleteNote);

module.exports = router;
