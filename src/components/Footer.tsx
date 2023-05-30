import Image from 'next/image'
import styles from '../styles/Footer.module.scss'


export default function Footer() {


    return (
        <section className={styles.footer}>
            <div className={styles.text}>
                <h1><u>Sobre Nós</u></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo voluptates cupiditate eius nostrum obcaecati placeat optio saepe soluta, eligendi non, itaque, ea inventore delectus vel fugit fuga eaque dolor!</p>
            </div>
            <div className={styles.category}>
                <h1><u>Categoria de Filmes</u></h1>
                <p>Como que eu sei</p>
                <p>Como que eu sei</p>
                <p>Como que eu sei</p>
                <p>Como que eu sei</p>

            </div>
            <div className={styles.recentMovies}>
                <h1><u>Categoria de Filmes</u></h1>
                <p>Como que eu sei</p>
                <p>Como que eu sei</p>
                <p>Como que eu sei</p>
                <p>Como que eu sei</p>
            </div>
            <div className={styles.contact}>
                <h1><u>Categoria de Filmes</u></h1>
                <p>Como que eu sei</p>
                <p>Como que eu sei</p>
                <p>Como que eu sei</p>
                <p>Como que eu sei</p>
            </div>
        </section>
    )
}

