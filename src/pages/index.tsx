import Banners from '@/components/Banners'
import NavBar from '@/components/NavBar'
import CineImages from '@/components/CineImages'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.scss'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';


export default function Home() {


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
      <NavBar page='HOME' token={tokenOn} name={name}/>
      <Banners />
      <CineImages />
      <Footer />
    </div>
  )
}
