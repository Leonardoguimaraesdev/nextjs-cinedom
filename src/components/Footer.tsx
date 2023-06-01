import Image from 'next/image'
import styles from '../styles/Footer.module.scss'


export default function Footer() {


    return (
        <section className={styles.footer}>
            <div className={styles.text}>
               <p>Os filmes de cachorros são uma dose de amor e diversão que nos fazem acreditar na magia dos melhores amigos de quatro patas.</p>
            </div>
        </section>
    )
}

