import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const [contador, setContador] = useState(0);
  
  const handleClickReset = () =>{
    setContador(0)
  }

  const handleClickIncrementarDescrementar = (estado) =>{
    if(estado){
      return setContador(contador+1)
    }else{
      return setContador(contador-1)
    }
  }
  
  const isEven = contador % 2 === 0
  return (
    <div>
      <h1>{contador}</h1>
      <p>{isEven ? 'Es par':'Es impar'}</p>
      <button onClick={() => handleClickIncrementarDescrementar(true)}>
        Incrementar
      </button>
      <button onClick={() => handleClickIncrementarDescrementar(false)}>
        Decrementar
      </button>
      <button onClick={handleClickReset}>
        Reset
      </button>
    </div>
    
  );
};

root.render(<App />);
