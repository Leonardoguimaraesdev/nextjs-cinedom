import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.scss'
import ContentFilms from '@/components/ContentFilms'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

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

  const [token, setToken] = useState(false)

  useEffect(() => {
    const cookie = Cookies.get('token')

    if (cookie) {
      setToken(true)
    }
    
  }, [])


  return (
    <div className={styles.main}>
        <NavBar page='TODOS FILMES'token={token}/>
        <ContentFilms films={props.filmes}/>
        <Footer />
    </div>
  )
}
