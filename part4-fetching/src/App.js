import { useEffect, useState } from "react";
import {Note} from "./Note.js";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  //fetch recupera datos de una api
  useEffect(() =>{
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setNotes(json);
      });
    }, 2000);
  }, []);
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
        .map((note) => (
         <Note key={note.id} {...note}/> 
        ))
      } 
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button>Crear nota</button>
      </form>
    </div>
  );
}
