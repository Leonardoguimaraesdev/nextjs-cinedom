import Image from 'next/image'
import styles from '../styles/NavBar.module.scss'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface NavBarProps {
    page: string
    token: boolean
    name: string
}

export default function NavBar(props: NavBarProps) {

    const router = useRouter()

    const [array, setArray] = useState(['HOME', 'TODOS FILMES', 'COMÉDIA', 'DRAMA', 'AÇÃO', 'ROMANCE', 'ANIMAÇÂO'])




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

    const goToLogin = () => {
        router.push('/login')
    }
    const goToRegister = () => {
        router.push('/register')
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.opacity}></div>
            <div className={styles.top}>
                <div className={styles.left}>
                    <Image className={styles.img} alt='Dog with popcorn and 3dglass' src='/cinedom.png' width={180} height={180} />
                </div>
                <div className={styles.right}>
                    {!props.token ? (<><button onClick={goToLogin}>ENTRAR</button>
                        <button onClick={goToRegister}>CADASTRE-SE</button></>) : <p>Olá, {props.name}</p>}

                </div>
            </div>
            <div className={styles.bottom}>
                <ul>
                    {array.map((item, i) => (
                        <li
                            onClick={() => changePage(item)}
                            className={props.page === item ? styles.red : styles.black}
                            key={i}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}