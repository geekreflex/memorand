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

  const note = await Note.find({ user: _id }).sort({ createdAt: -1 });

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
  const { title, body } = req.body;

  const note = await Note.findById(req.params.id);

  console.log(req.body, note);

  if (note) {
    note.title = title;
    note.body = body;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const setNoteColor = asyncHandler(async (req, res) => {
  const { color } = req.body;

  const note = await Note.findById(req.params.id);

  if (note) {
    note.color = color;

    await note.save();
    res.json({ message: "Color changed" });
  } else {
    res.status(404);
    throw new Error("Error occured (Color)");
  }
});

const pinNote = asyncHandler(async (req, res) => {
  const { pin } = req.body;

  const note = await Note.findById(req.params.id);

  if (note) {
    note.pinned = pin;

    await note.save();
    res.json({ message: "Note pinned" });
  } else {
    res.status(404);
    throw new Error("Error Occured (Pin)");
  }
});

const trashNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  console.log(note);

  if (note) {
    note.trashed = !note.trashed;

    await note.save();
    res.json({ message: "Note Trashed" });
  } else {
    res.status(404);
    throw new Error("Error Occured (Trash)");
  }
});

module.exports = {
  createNote,
  getUserNote,
  deleteNote,
  updateNote,
  setNoteColor,
  trashNote,
  pinNote,
};
