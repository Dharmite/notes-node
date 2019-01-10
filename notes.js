const fs = require("fs");

let fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes-data.json"));
  } catch (error) {
    return [];
  }
};

let saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  const newNote = {
    title,
    body
  };

  let duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(newNote);
    saveNotes(notes);
    return newNote;
  }
};

let getAll = () => {

    return fetchNotes();

};

let getNote = title => {
  let notes = fetchNotes();
  if (notes.filter(note => note.title === title).length > 0) {
    return notes.filter(note => note.title === title)[0];
  }
};

let removeNote = title => {
  let notes = fetchNotes();

  if (notes.filter(note => note.title === title).length > 0) {
    let filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);
    return true;
  } else {
    return false;
  }
};

let logNote = (note) => {

    console.log("--");
    console.log("Title: ", note.title);
    console.log("Body: ", note.body);

}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
