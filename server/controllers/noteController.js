const Note = require("../models/noteModel");
const User = require("../models/userModel");

const createNote = async (req, res) => {
  const { title, body } = req.body;

  const note = new Note({
    title,
    body,
    user: req.user._id,
  });

  const createdNote = await note.save();
  return res.status(201).json(createdNote);
};

const getUserNote = async (req, res) => {
  const { _id } = req.user;

  const note = await Note.find({ user: _id });

  if (note) {
    return res.status(200).json(note);
  } else {
    return res.status(404).json({ mesage: ["Note not found"] });
  }
};

const deleteNote = async (req, res) => {
  //
};

const updateNote = async (req, res) => {
  //
};

module.exports = { createNote, getUserNote };
