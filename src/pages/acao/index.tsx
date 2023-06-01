import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.scss'
import ContentFilms from '@/components/ContentFilms'

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/movies');
  const data = await response.json();

  return {
    props: {
      filmes: data.filmes,
    },
  };
}


export default function Action({filmes}:any) {

  return (
    <div className={styles.main}>
        <NavBar page='AÇÃO'/>
        <ContentFilms films={filmes}/>
        <Footer />
    </div>
  )
}
