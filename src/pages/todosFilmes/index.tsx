import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.scss'
import ContentFilms from '@/components/ContentFilms'

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`);
  const data = await response.json();

  return {
    props: {
      filmes: data.filmes,
    },
  };
}



export default function TodosFilmes(props:any) {
  console.log(props.filmes)

  return (
    <div className={styles.main}>
        <NavBar page='TODOS FILMES'/>
        <ContentFilms films={props.filmes}/>
        <Footer />
    </div>
  )
}
