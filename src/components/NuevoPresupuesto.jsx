import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ 
    presupuesto, 
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("Este no es un presupuesto valido");

      return;
    }
    setMensaje("");
    setIsValidPresupuesto(true)
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />
        </div>
        <input type="submit" value="Añadir" />
      </form>
      {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
    </div>
  );
};

export default NuevoPresupuesto;
