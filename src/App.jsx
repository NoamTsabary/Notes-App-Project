import React from "react";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NotesList from "./notesList";

//Should I have moved these functions to the NotesList to be handled there?
//or is this the right place for them?
const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (text, title) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text,
      title,
      date: `${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getDate()}${addEnding(date)} ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`,
    };
    setNotes((val) => [...val, newNote]);
  };

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete this lovely note?")) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    }
  };

  const editNote = (text, title, date, id) => {
    const editDate = new Date();
    const editedNote = {
      id,
      text,
      title,
      date,
      editDate: `${editDate.toLocaleString("en-us", {
        month: "short",
      })} ${editDate.getDate()}${addEnding(editDate)} ${editDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`,
    };
    const editedNotes = notes.map((note) => {
      if (note.id === id) {
        return editedNote;
      }
      return note;
    });
    setNotes(editedNotes);
  };

  const addEnding = (date) => {
    const key = date.getDate() 
    switch (key) {
      case 1:
      case 21:
      case 31:
        return "st"
      case 2:
      case 22:
        return "nd"
      case 3:
      case 23:
        return "rd"
      default:
        return "th"
    }
  }

  return (
    <div className="wrapper">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleUpdateNote={editNote}
      />
    </div>
  );
};

export default App;
