import AddNote from "./addNote";
import NoteModal from "./modal";

const notesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleUpdateNote,
}) => {
  return (
    <div className="notes-list">
      <AddNote
        handleAddNote={handleAddNote}
        handleUpdateNote={handleUpdateNote}
      />
      {notes.map((note) => (
        <NoteModal
          key={note.id} 
          id={note.id}
          text={note.text}
          date={note.date}
          title={note.title}
          editDate={note.editDate}
          handleDeleteNote={handleDeleteNote}
          handleUpdateNote={handleUpdateNote}
        />
      ))}
    </div>
  );
};

export default notesList;
