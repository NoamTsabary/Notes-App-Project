import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Note from "./NoteComponent";
import AddNote from "./addNote";

function NoteModal({ id, text, date, title, editDate, handleDeleteNote, handleUpdateNote }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Note
        handleShow={handleShow}
        id={id}
        text={text}
        date={date}
        title={title}
        editDate={editDate}
        handleDeleteNote={handleDeleteNote}
      />

      <Modal show={show} onHide={handleClose}>
        <AddNote
          handleHide={handleClose}
          handleShow={handleShow}
          id={id}
          text={text}
          date={date}
          title={title}
          handleDeleteNote={handleDeleteNote}
          handleUpdateNote={handleUpdateNote}
        />
      </Modal>
    </>
  );
}

export default NoteModal;
