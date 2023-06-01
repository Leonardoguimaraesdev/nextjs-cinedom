import Image from 'next/image'
import styles from '../styles/FilmCard.module.scss'
import { useState } from 'react';



export default function FilmCard() {

    const [isOverlayCard, setIsOverlayCard] = useState(false);
    const [isOverlayWindowSinopse, setIsOverlayWindowSinopse] = useState(false);

    const handleMouseLeave = () => {
        setIsOverlayCard(false);
    };

    const handleMouseEnter = () => {
        setIsOverlayCard(true);
    };

    const sinopseWindowOpen = () => {
        setIsOverlayWindowSinopse(true);
    };

    const sinopseWindowClose = () => {
        setIsOverlayWindowSinopse(false);
    };

    return (
        <div className={styles.filmCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image className={styles.img} src='/DogCartaz.png' alt='Cartaz do filme' width={250} height={400} />
            {isOverlayCard && (
                <div className={styles.overlay}>
                    <div className={styles.overlayButtons}>
                        <button onClick={sinopseWindowOpen} className={styles.btn}>SINOPSE</button>
                        <button className={styles.btn}>TRAILER</button>
                    </div>
                </div>
            )}
            {isOverlayWindowSinopse && (
                <div className={styles.overlayWindowBlock}>
                    <div className={styles.overlayWindow}>
                        <div className={styles.btn}>
                            <button onClick={sinopseWindowClose}>X</button>
                        </div>
                        <div className={styles.text}>
                            <h1>SINOPSE</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem deleniti deserunt necessitatibus unde autem. Sapiente eveniet cum quasi sit, possimus necessitatibus minus laboriosam. Facere iusto provident eveniet fugit possimus.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

