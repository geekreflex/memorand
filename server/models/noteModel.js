const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: "Untitled",
    },
    body: {
      type: String,
      required: true,
    },
    pinned: {
      type: Boolean,
      default: false,
      required: true,
    },
    color: {
      type: String,
      default: "#202124",
    },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
