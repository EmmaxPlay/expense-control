import {useState} from "react";
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')


    const ocultarModal = () => {

        setTimeout(() =>{
            setModal(false)
        }, 500)
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                className="button"
                src={CerrarBtn}
                alt="Boton cerrar"
                onClick={ocultarModal}
            />
        </div>
        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>
                Nuevo Gasto
            </legend>
            <div className="campo">
                <label htmlFor="nombre">Nombre gasto</label>
                <input 
                type="text" 
                id="nombre"
                placeholder="Ingresa el nombre del gasto"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                type="number" 
                id="cantidad"
                placeholder="Ingresa la cantidad del gasto"
                value={cantidad}
                onChange={e => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                <select
                id="categoria"
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="general">En general</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input 
            type="submit"
            value="Añadir gasto"/>
        </form>
    </div>
  )
}

export default Modal