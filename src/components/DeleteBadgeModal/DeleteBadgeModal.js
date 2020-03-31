import React from 'react';

import './DeleteBadgeModal.css'
import Modal from '../Modal/Modal';

const DeleteBadgeModal = (props) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} >
            <div className="DeleteBadgeModal">
                <h1>¿Estas seguro?</h1>
                <p>Esas a punto de eliminar este badge.</p>

                <div>
                    <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Eliminar</button>
                    <button onClick={props.onClose} className="btn btn-primary">Cancelar</button>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteBadgeModal;
