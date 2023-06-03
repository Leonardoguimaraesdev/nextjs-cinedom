import React from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles/VideoModal.module.scss'

const VideoModal = ({ isOpen, videoId, closeModal }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 680 });

  const customStyles = {

    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },

    content: {
      backgroundColor: 'rgb(31, 31, 31)',
      width: isMobile ? '90%' : '50%',
      height: isMobile ? '50%' : '70%',
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