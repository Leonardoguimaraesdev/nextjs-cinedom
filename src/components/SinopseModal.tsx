import React from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';

import styles from '../styles/SinopseModal.module.scss'


const SinopseModal = ({ isOpen, closeModal, name, sinopse, diretor, elenco }:any) => {
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
          <h1>{name}</h1>
          <p>{sinopse}</p>
          <p>Direção: {diretor}</p>
          <p>Elenco: {elenco}</p>
        </div>
      </div>
    </Modal>
  );
};

export default SinopseModal;