import React from 'react';
import Modal from 'react-modal';
import styles from '../styles/SinopseModal.module.scss'


const SinopseModal = ({ isOpen, closeModal }:any) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
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