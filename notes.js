console.log("Starting notes.js");

const fs = require("fs");

const addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var noteString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(noteString);
  } catch (e) {}

  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }
};

const getAll = () => {
  console.log("Listing Notes");
};

const getNote = title => {
  console.log("Reading note", title);
};

const removeNote = title => {
  console.log("Removing note", title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
