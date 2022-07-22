import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaBeer  } from 'react-icons/fa';


const noteComponent = ({
  id,
  text,
  date,
  title,
  editDate,
  handleDeleteNote,
  handleShow,
}) => {
  const displayModal = (event) => {
    if (event.target.id !== id) return;
    else handleShow(true);
  };

  return (
    <div className="note" id={id} onClick={displayModal}>
      <div className="note-header">
        <sub> Created: {date}</sub>
        <FaBeer 
          onClick={() => handleDeleteNote(id)}
          className="note-delete"
          size="1.3em"
        />
      </div>
      <sup> {editDate ? "Edited:" + editDate : ""}</sup>
      <h2>{title}</h2>
      <span>{text}</span>
    </div>
  );
};

export default noteComponent;
