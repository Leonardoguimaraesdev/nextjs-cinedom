import Image from 'next/image'
import styles from '../styles/ContentFilms.module.scss'
import FilmCard from '../components/FilmCard'

interface ContentFilmsProps {
    films: {}
}

export default function ContentFilms(props: ContentFilmsProps) {


    return (
        <section className={styles.contentFilmsContainer}>
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />

        </section>
    )
}

