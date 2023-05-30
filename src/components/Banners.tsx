import Image from 'next/image'
import styles from '../styles/Banners.module.scss'


export default function Banners() {


    return (
        <section className={styles.bannersContainer}>
            <div className={styles.left}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className={styles.switchLeft}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>
            </div>
            <div className={styles.banners}>
            </div>
            <div className={styles.right}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className={styles.switchRight}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </section>
    )
}

