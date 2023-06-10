import styles from '../styles/ContentFilms.module.scss'
import FilmCard from '../components/FilmCard'

interface ContentFilmsProps {
    films: {
        name: string;
        sinopse: string;
        trailer: string;
        image: string
        elenco: string;
        direcao: string;
    }[]
}

export default function ContentFilms(props: ContentFilmsProps) {




    return (
        <section className={styles.contentFilmsContainer}>
            {props.films.map((item:any, i: number) => {
                return <FilmCard key={i} name={item.nome} sinopse={item.sinopse} trailer={item.trailer} image={item.image} elenco={item.elenco} direcao={item.direcao} />
            })}
        </section>
    )
}

