import Image from 'next/image'
import styles from '../styles/NavBar.module.scss'
import { useRouter } from 'next/router'

interface NavBarProps {
    page: string
}

export default function NavBar(props: NavBarProps) {

    const array = ['HOME', 'TODOS FILMES', 'COMÉDIA', 'DRAMA', 'AÇÃO', 'ROMANCE', 'ANIMAÇÂO']

    const router = useRouter()


    const changePage = (e: any) => {

        if (e === 'HOME') {
            router.push('/')
        }
        if (e === 'TODOS FILMES') {
            router.push('/todosFilmes')
        }
        if (e === 'COMÉDIA') {
            router.push('/comedia')
        }
        if (e === 'DRAMA') {
            router.push('/drama')
        }
        if (e === 'AÇÃO') {
            router.push('/acao')
        }
        if (e === 'ROMANCE') {
            router.push('/romance')
        }
        if (e === 'ANIMAÇÂO') {
            router.push('/animacao')
        }


    }

    return (
        <nav className={styles.nav}>
            <div className={styles.opacity}></div>
            <div className={styles.top}>
                <div className={styles.left}>
                    <Image className={styles.img} alt='Dog with popcorn and 3dglass' src='/cinedom.png' width={180} height={180} />
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
                        if (props.page === item) {
                            backGround = 'red'
                        } else {
                            backGround = ''
                        }
                        return (<li onClick={() => changePage(item)} style={{ backgroundColor: backGround }} key={i}>{item}</li>)
                    })}
                </ul>
            </div>
        </nav>
    )
}