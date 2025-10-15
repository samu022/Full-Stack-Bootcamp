
import './App.css';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
];

export default function App(){
  /*if(typeof notes === 'undefined' || notes.length === 0){
    return "No tenemos notas que mostrar"
  }*/
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}