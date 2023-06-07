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

  const [tokenOn, setTokenOn] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      setName('leonardo')
      setTokenOn(true)
    } else {
      setTokenOn(false)
    }

  }, [])

  return (
    <div className={styles.main}>
        <NavBar page='AÇÃO' token={tokenOn} name={name}/>
        <ContentFilms films={filmes}/>
        <Footer />
    </div>
  )
}
