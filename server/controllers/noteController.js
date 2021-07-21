const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

const createNote = asyncHandler(async (req, res) => {
  const { title, body } = req.body;

  const note = new Note({
    title,
    body,
    user: req.user._id,
  });

  const createdNote = await note.save();
  return res.status(201).json(createdNote);
});

const getUserNote = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  const note = await Note.find({ user: _id });

  if (note) {
    return res.status(200).json(note);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const note = await Note.findById(id);

  if (note) {
    await note.remove();
    return res.json({ message: "Note removed" });
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const updateNote = asyncHandler(async (req, res) => {
  //
});

module.exports = { createNote, getUserNote, deleteNote, updateNote };
