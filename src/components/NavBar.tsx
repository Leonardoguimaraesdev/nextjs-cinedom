import Image from 'next/image'
import styles from '../styles/NavBar.module.scss'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'


interface NavBarProps {
    page: string
    token: boolean
    nameToken: string
}

export default function NavBar(props: NavBarProps) {

    const router = useRouter()

    const [array, setArray] = useState(['HOME', 'TODOS FILMES', 'COMÉDIA', 'DRAMA', 'AVENTURA', 'ROMANCE', 'ANIMAÇÂO'])

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
        if (e === 'AVENTURA') {
            router.push('/aventura')
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

    const logout = () => {
        Cookies.remove('token')
        window.location.reload();
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.opacity}></div>
            <div className={styles.top}>
                <div className={styles.left}>
                    <Image className={styles.img} alt='Dog with popcorn and 3dglass' src='/cinedom.png' width={180} height={180} />
                </div>
                <div className={styles.right}>
                    {!props.token ? (<><button className={styles.login} onClick={goToLogin}>ENTRAR</button>
                        <button className={styles.register} onClick={goToRegister}>CADASTRE-SE</button></>) : <><p>Olá, {props.nameToken}</p> <button className={styles.logout} onClick={logout}>Sair</button></>}

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