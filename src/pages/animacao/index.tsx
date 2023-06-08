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


export default function Animation({filmes}:any) {

  const [token, setToken] = useState(false)
  const [name, setName] = useState('')

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
        <NavBar page='ANIMAÇÃO' token={token} nameToken={name}/>
        <ContentFilms films={filmes}/>
        <Footer />
    </div>
  )
}
