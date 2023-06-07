import React from "react";
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp.png';
import {Boton} from './componentes/Boton';
import {Contador} from './componentes/Contador';

function App() {

  const manejarClic = () => {

    console.log('Clic');

  }

  const reiniciarContador = () => {

    console.log('Reiniciar');
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>

        <img className='freecodecamp-logo'
              src={freeCodeCampLogo}
              alt='Logo de freecodecamp'/>

      </div>

      <div className='contenedor-principal'> 

          <Contador 
             numClics= '5' />
          <Boton
            texto='Click'
            esBotonDeClic={true}
            manejarClic={manejarClic}/>

          <Boton
              texto='Reiniciar'
              esBotonDeClic={false}
              manejarClic={reiniciarContador}/>

       
      </div>

      
    </div>
  );
}

export default App;
