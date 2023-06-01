import Image from 'next/image'
import styles from '../styles/CineImages.module.scss'


export default function CineImages() {


    return (
        <section className={styles.CineImagesContainer}>
            <div className={styles.top}> <h1><u>LANÇAMENTOS</u></h1></div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.leftTop}>
                        <Image className={styles.img} src='/dogMovie7.jpg' alt='banner de filme' width={400} height={200} />
                        <h2>SHOW DOGS: O AGENTE CANINO</h2>
                    </div>
                    <div className={styles.leftBottom}>
                        <Image className={styles.img} src='/dogMovie8.jpg' alt='banner de filme' width={400} height={200} />
                        <h2>MARLEY & EU</h2>
                    </div>
                </div>
                <div className={styles.middle}>
                    <Image className={styles.img} src='/dogMovie9.jpg' alt='banner de filme' width={700} height={200} />
                    <h2>A caminho de casa</h2>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightTop}>
                        <Image className={styles.img} src='/dogMovie10.jpg' alt='banner de filme' width={400} height={200} />
                        <h2>DOG: A AVENTURA DE UMA VIDA</h2>
                    </div>
                    <div className={styles.rightBottom}>
                        <Image className={styles.img} src='/dogMovie2.jpg' alt='banner de filme' width={400} height={200} />
                        <h2>TOGO</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

