import Image from 'next/image'
import styles from '../styles/FilmCard.module.scss'
import { useState } from 'react';
import VideoModal from './VideoModal';
import SinopseModal from './SinopseModal';

interface FilmCardProps {
    name: string
    sinopse: string
    trailer: string
    image: string
    elenco: string
    direcao: string
}

export default function FilmCard(props:FilmCardProps) {

    const [isOverlayCard, setIsOverlayCard] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isSinopseModalOpen, setIsSinopseModalOpen] = useState(false);

    const handleMouseLeave = () => {
        setIsOverlayCard(false);
    };

    const handleMouseEnter = () => {
        setIsOverlayCard(true);
    };

    const handleOpenSinopseModal = () => {
        setIsSinopseModalOpen(true);
    };

    const handleCloseSinopseModal = () => {
        setIsSinopseModalOpen(false);
    };

    const handleOpenVideoModal = () => {
        setIsVideoModalOpen(true);
    };

    const handleCloseVideoModal = () => {
        setIsVideoModalOpen(false);
    };


    return (
        <div className={styles.filmCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image className={styles.img} src={`/catalogMovies/${props.image}`} alt='Cartaz do filme' width={250} height={400} />
            {isOverlayCard && (
                <div className={styles.overlay}>
                    <div className={styles.overlayButtons}>
                        <button onClick={handleOpenSinopseModal} className={styles.btn}>SINOPSE</button>
                        <button onClick={handleOpenVideoModal} className={styles.btn}>TRAILER</button>
                    </div>
                </div>
            )}
            <VideoModal
                isOpen={isVideoModalOpen}
                videoId={props.trailer}
                closeModal={handleCloseVideoModal}
            />
            <SinopseModal
                isOpen={isSinopseModalOpen}
                closeModal={handleCloseSinopseModal}
                name={props.name}
                sinopse={props.sinopse}
                diretor={props.direcao}
                elenco={props.elenco}
            />
        </div>
    )
}

