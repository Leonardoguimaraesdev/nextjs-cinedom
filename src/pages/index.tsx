import Banners from '@/components/Banners'
import NavBar from '@/components/NavBar'
import CineImages from '@/components/CineImages'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.scss'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function Home() {
  

  const [token, setToken] = useState(false)

  useEffect(() => {
    const cookie = Cookies.get('token')

    if (cookie) {
      setToken(true)
    }
    
  }, [])


  return (
    <div className={styles.main}>
      <NavBar page='HOME' token={token} />
      <Banners />
      <CineImages />
      <Footer />
    </div>
  )
}
