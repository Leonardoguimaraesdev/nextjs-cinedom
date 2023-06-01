import Image from 'next/image'
import styles from '../styles/Banners.module.scss'
import { useState } from 'react'


export default function Banners() {

    const [numArray, setNumArray] = useState(0)
    const [arrayBanner, setArrayBanner] = useState(['/DogBanner.jpg', '/DogBanner2.jpg', '/DogBanner3.jpg'])

    const changeBannerLeft = () => {
        if(numArray === 0) {
            return
        } else {
            setNumArray(numArray - 1)
        }
    }

    const changeBannerRight = () => {
        if(numArray === 2) {
            return
        } else {
            setNumArray(numArray + 1)
        }
    }

    return (
        <section className={styles.bannersContainer}>
            <div className={styles.left}>
                <svg onClick={(e) => changeBannerLeft()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className={styles.switchLeft}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>
            </div>
            <div className={styles.banners}>
                <Image className={styles.img} src={arrayBanner[numArray]} alt='Banner de filme' width={1170} height={637}/>
            </div>
            <div className={styles.right}>
                <svg onClick={(e) => changeBannerRight()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className={styles.switchRight}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </section>
    )
}

