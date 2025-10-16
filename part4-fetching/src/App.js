import { useEffect, useState } from "react";
import {Note} from "./Note.js";
import axios from 'axios';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  //fetch recupera datos de una api
  useEffect(() =>{
    setLoading(true); 
      axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const {data} = response;
        setNotes(data);
        setLoading(false); 
      });
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
        <input type="text" onChange={handleChange}></input>
        <button>Crear nota</button>
      </form>
    </div>
  );
}
