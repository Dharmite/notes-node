const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

/* 
./ current dir

notes é um objeto, pq no ficheiro notes.js temos um module.exports
*/
const notes = require("./notes.js");

const argv = yargs.argv;
const command = argv._[0];
console.log("Command: ", command);

if (command === "add") {
  console.log("Adding new note");
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Error: Note title taken");
  }
} else if (command === "list") {
  console.log("Listing all notes");
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => {

    notes.logNote(note);
      
  });
} else if (command === "remove") {
  console.log("Removing note");
  note = notes.removeNote(argv.title);
  if (note) {
    console.log("Note removed");
  } else {
    console.log("Error: There isn't any note with that title");
  }
} else if (command === "read") {
  console.log("Reading note");
  let note = notes.getNote(argv.title);
  
  if (note) {
    notes.logNote(note);
  } else {
    console.log("Error: There isn't any note with that title");
  }
} else {
  console.log("Command not found");
}
