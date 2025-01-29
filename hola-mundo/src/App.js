// import logo from './logo.svg';
// import './App.css';
// import Acercade from './componentes/Acercade';

// function App() {
//   const nombre = 'Marina Gonzalez';
//   const elemento = <h1>Hola, {nombre}</h1>;

//   return (
    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//         <h1>Hola, {nombre}</h1>
//       </header>
//       <Acercade/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Acercade from './componentes/Acercade';
import Variables2 from './componentes/Variables2';
import { AdiosMundo } from './componentes/AdiosMundo';
function App() {
  // Array de rutas de las imágenes
  const imageArray = [
    './img/pinguino.jpg',
    './img/sol.jpg',
    './img/pinguino4.jpg'
  ];

  const [currentindex, setcurrentindex] = useState(0);

  // Show next image (with proper increment)
  const shownextimage = () => {
    setcurrentindex((previndex) => (previndex + 1) % imageArray.length);
  };

  // Show previous image (with proper decrement)
  const showpreviousimage = () => {
    setcurrentindex((previous) => (previous === 0 ? imageArray.length - 1 : previous - 1));
  };

  return (
    <div className="App">
      <h1>Galería de Imágenes</h1>
      <div className="image-gallery">
        <img
          src={imageArray[currentindex]}
          alt={`img-${currentindex}`}
          style={{ maxWidth: '300px', margin: '20px 0' }}
        />
        <div>
          <button onClick={showpreviousimage} style={{ marginRight: '10px' }}>
            Anterior
          </button>
          <button onClick={shownextimage}>Siguiente</button>
        </div>
      </div>

    </div>
  );
}

function App1(){
const [count, setCount] =useState(0);

return (
    <div style={{textAlign:"center", marginTop:"20px"}}>
        <button onClick={() => setCount (count+1)} >incremento</button>
        <span style={{marginLeft:"10px"}} >{count}</span>
    </div>
);

}

function AppParImpar(){
const esPar = (numero) => {
  return numero%2 === 0;
};

const numero = 4;
return(
<div style={styles.container}>
<h1 style= {styles.heading}>¿El numero es par o impar?</h1>
<p  style={styles.result}>
  El numero <strong>{numero}</strong> es{" "}
  {esPar(numero) ? <span style={styles.par}>Par</span>:
  <span style={styles.impar}>Impar</span>}
  </p>
</div>
);
}
const styles = {
  container:{
   textAlign:"center",
   marginTop:"50px",
   fontFamily:"Arial, San-Serif"

  },

  heading:{
    fontSize:"24px",
    color: "#333",
  },

  result:{
    fontSize:"20px",
    color: "#535",
  },

  par:{
    color:"green",
    fontWeight: "bold",
  },

  impar:{
    color:"red",
    fontWeight: "bold",
  },
};

<AdiosMundo></AdiosMundo>
export default AdiosMundo;
