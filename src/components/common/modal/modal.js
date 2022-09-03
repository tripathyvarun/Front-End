import React, { useEffect } from 'react'
import classes from './modal.module.css'
import Modal from 'react-modal';

import modalHeader from '../../../assets/common/modalHeader.svg'

function ModalCtn({children, showModal, setShowModal, header}) {
    const customStyles = {
        content: {
            height: 'fit-content',
            width: 'fit-content',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            border:'none'
        },
    };

    useEffect(()=>{
        Modal.setAppElement('body');
    })


    return (
        <Modal
        isOpen={showModal}
        onRequestClose={()=>setShowModal(false)}
        style={customStyles}
        contentLabel="Example Modal">
            <div className={classes.majorContainer}>
                <div className={classes.headerContainer}>
                    <img src={modalHeader}/>
                    <h2>{header}</h2>
                </div>
                {children}
            </div>
        </Modal>
    )
}

export default ModalCtn
