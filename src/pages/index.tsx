import Banners from '@/components/Banners'
import NavBar from '@/components/NavBar'
import CineImages from '@/components/CineImages'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.scss'


export default function Home() {

  return (
    <div className={styles.main}>
        <NavBar page='HOME'/>
        <Banners />
        <CineImages />
        <Footer />
    </div>
  )
}
