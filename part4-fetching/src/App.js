import { useState } from "react";
import {Note} from "./Note.js";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    const noteToAddToState ={
      id: notes.length + 1,
      title: newNote,
      body: newNote
    };

    setNotes((prevNotes) => prevNotes.concat(noteToAddToState));
    setNewNote("");
  };

  return (
    <div>
      <h1>Notes</h1>
      <ol>
      {notes
        .map((note)=>{
         <Note /> 
        })
      } 
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button>Crear nota</button>
      </form>
    </div>
  );
}
