import Image from 'next/image'
import styles from '../styles/CineImages.module.scss'


export default function CineImages() {


    return (
        <section className={styles.CineImagesContainer}>
            <div className={styles.top}> <h1><u>FILMES RECENTES</u></h1></div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.leftTop}>
                        <div></div>
                        <h2>Adasdasasdasd</h2>
                    </div>
                    <div className={styles.leftBottom}>
                        <div></div>
                        <h2>Adasdasasdasd</h2>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div></div>
                    <h2>Adasdasasdasd</h2>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightTop}>
                        <div></div>
                        <h2>Adasdasasdasd</h2>
                    </div>
                    <div className={styles.rightBottom}>
                        <div></div>
                        <h2>Adasdasasdasd</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

