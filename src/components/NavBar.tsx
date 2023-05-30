import Image from 'next/image'
import styles from '../styles/NavBar.module.scss'

interface NavBarProps {
    page: string
}

export default function NavBar (props: NavBarProps) {

    const array = ['HOME', 'TODOS FILMES', 'COMÉDIA', 'TERROR', 'AÇÃO', 'ROMANCE' ]

    return (
        <nav className={styles.nav}>
            <div className={styles.opacity}></div>
            <div className={styles.top}>
                <div className={styles.left}>
                    <Image className={styles.img} alt='Dog with popcorn and 3dglass' src='/cinedom.png' width={180} height={180}/>
                </div>
                <div className={styles.right}>
                    <button>ENTRAR</button>
                    <button>CADASTRE-SE</button>
                </div>
            </div>
            <div className={styles.bottom}>
                <ul>
                    {array.map((item, i) => {
                        let backGround = ''
                        if(props.page === item) {
                            backGround = 'red'
                        } else {
                            backGround = ''
                        }
                        return (<li style={{backgroundColor: backGround}}key={i}>{item}</li>)
                    })}
                </ul>
            </div>
        </nav>
    )    
}