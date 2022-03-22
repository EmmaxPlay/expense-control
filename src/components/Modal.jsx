import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal}) => {

    const ocultarModal = () => {
        setModal(false)
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
        </form>
    </div>
  )
}

export default Modal