import './App.css';
import Mensaje from './Mensaje'

const Description = () =>{
  return <h1>Por samuel alegre</h1>
} 
function App() {
  
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='blue' message='de React' />
      <Description />
    </div>
  );
}

export default App;
