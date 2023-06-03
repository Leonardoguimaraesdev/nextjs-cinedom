import React from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';

import styles from '../styles/SinopseModal.module.scss'


const SinopseModal = ({ isOpen, closeModal }:any) => {
  const isMobile = useMediaQuery({ maxWidth: 680 });


  const customStyles = {

    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },

    content: {
      backgroundColor: 'rgb(31, 31, 31)',
      color:'#fff',
      width: isMobile ? '90%' : '50%',
      height: '70%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <button onClick={closeModal}>X</button>
        </div>
        <div className={styles.bottom}>
          <h1>Quatro vidas de um cachorro</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo iure nam ad illo dolore deserunt enim, iste temporibus, mollitia reprehenderit excepturi consectetur amet quae fuga quia minus! Laborum, tenetur repellendus!</p>
          <p>Direto: Eu</p>
          <p>Categoria: Ele</p>
          <p>Elenco: Todos</p>
        </div>
      </div>
    </Modal>
  );
};

export default SinopseModal;