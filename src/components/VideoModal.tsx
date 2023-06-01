import React from 'react';
import Modal from 'react-modal';
import styles from '../styles/VideoModal.module.scss'

const VideoModal = ({ isOpen, videoId, closeModal }: any) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <button onClick={closeModal}>X</button>
        </div>
        <div className={styles.bottom}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;