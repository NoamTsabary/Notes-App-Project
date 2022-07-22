import { useState } from "react";

const AddNote = ({
  handleAddNote,
  handleShow,
  handleUpdateNote,
  handleHide,
  id,
  text,
  date,
  title
}) => {
  const [noteText, setNoteText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [editText, setEditText] = useState(text);
  const [editTitle, setEditTitle] = useState(title);
  
  const handleChange = (event) => {
    event.target.style.height = "inherit";
    event.target.style.height = `${event.target.scrollHeight}px`;
    if (text) {
    setEditText(event.target.value)
    }
    setNoteText(event.target.value);
  };
  const handleInputChange = (event) => {
    if (text) {
    setEditTitle(event.target.value)
    }
    setTitleText(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, titleText);
      setNoteText("");
      setTitleText("");
      resizeTextArea();
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    handleUpdateNote(editText, editTitle, date, id);
    handleHide()
  }

  const resizeTextArea = () => {
    document.querySelector(".text-area").style.height = "inherit";
  };

  return (
    <form>
      <header className="write note">
        <input
          className="inputTitle"
          placeholder="Title..."
          value={title ? editTitle : titleText}
          onChange={handleInputChange}
        ></input>
        <label>
          <textarea
            className="text-area"
            placeholder="Better Note it!"
            value={text ? editText : noteText}
            onChange={handleChange}
          />
        </label>
        <button className="add-note-btn" onClick={ handleShow ? handleUpdate : handleClick }>
          {text ? "Update" : "Add Note"}
        </button>
      </header>
    </form>
  );
};

export default AddNote;
