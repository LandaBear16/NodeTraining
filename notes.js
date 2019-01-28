console.log("Starting notes.js");

const addNote = (title, body) => {
  console.log("adding note", title, body);
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
