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


export default function Action({filmes}:any) {

  const [token, setToken] = useState(false)
  const [name, setName] = useState('')

  const [filmsArray, setFilmsArray] = useState<any>([]);

  useEffect(() => {
    const categoryFilm = () => {
      if (filmes) {
        const dramaFilms = filmes.filter((item: any) => item.categoria === 'aventura');
        setFilmsArray(dramaFilms);
      }
    };

    categoryFilm();
  }, [filmes]);

  useEffect(() => {
    const cookie = Cookies.get('token')
    const name = Cookies.get('name')

    if (cookie && name) {
      setToken(true)
      setName(name)
    }
    
  }, [])


  return (
    <div className={styles.main}>
        <NavBar page='AVENTURA' token={token} nameToken={name}/>
        <ContentFilms films={filmsArray}/>
        <Footer />
    </div>
  )
}
