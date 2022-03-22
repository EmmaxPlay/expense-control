import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal.jsx"

import IconoNuevoGasto from "./img/nuevo-gasto.svg"

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)


  const handleNuevoGasto = () => {

    setModal(true)

    setTimeout(() =>{
      setAnimarModal(true)
      console.log("animando")
    },500)
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (      
      <div className="nuevo-gasto">
        <img 
        src={IconoNuevoGasto}
        alt="Icono nuevo Gasto"
        onClick={handleNuevoGasto}
        />
      </div>)}
      {modal &&
        <Modal 
        setModal = {setModal}
        animarModal = {animarModal}
        />}
    </div>
  );
}

export default App;
