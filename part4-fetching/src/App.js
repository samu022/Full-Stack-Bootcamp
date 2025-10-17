import { useEffect, useState } from "react";
import {Note} from "./Note.js";
//import axios from 'axios';
import { getAllNotes } from "./services/notes/getAllNotes.js";
import { createNote } from "./services/notes/createNote.js";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  //fetch recupera datos de una api
  useEffect(() =>{
    setLoading(true); 
     getAllNotes()
     .then(notes => {
      setNotes(notes);
      setLoading(false);
     });
  }, []);
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    const noteToAddToState ={
      //id: notes.length + 1,
      title: newNote,
      body: newNote,
      userId: 1
    };
    setError("");
    createNote(noteToAddToState)
    .then(newNote => {
      setNotes((prevNotes) => prevNotes.concat(newNote));
    })
    .catch((e) => {
      console.error(e);
      setError('La API ha fallado');
    });
    /*axios.post("https://jsonplaceholder.typicode.com/posts", noteToAddToState)
    .then(response => {
      const {data} = response;
      setNotes(prevNotes => prevNotes.concat(data));
    });*/

    //setNotes((prevNotes) => prevNotes.concat(noteToAddToState));
    setNewNote("");
  };

  //if(notes.length === 0) return "Hola como estas!";
  return (
    <div>
      <h1>Notes</h1>
      {
        loading 
         ? "Cargando ..." : ""
      }
      
      <ol>
      {notes
        .map((note) => (
         <Note key={note.id} {...note}/> 
        ))
      } 
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}></input>
        <button>Crear nota</button>
      </form>
      {error ? error : ""}
    </div>
  );
}
