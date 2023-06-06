import { useState } from "react";
import styles from '../styles/Form.module.scss'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import Link from "next/link";

export default function Input() {

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [checkEmailExist, setCheckEmailExist] = useState<any>('')

    const handleSubmit = (event: any) => {
        
        event.preventDefault();

        const cookie = Cookies.get('email')

        if (cookie !== email) {
            const dif = <p>E-mail ou senha incorreta</p>
            setCheckEmailExist(dif)
        } else {
            router.push('/')
        }
    };

    return (
        <section className={styles.form}>
            <form onSubmit={handleSubmit}>
                <h1 className={styles.loginTittle}>LOGIN</h1>
                {checkEmailExist}
                <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>

                <h4>
                    Caso não tenha uma conta
                    <Link href="/register">
                        <b><u>Clique Aqui</u></b>
                    </Link>
                </h4>

            </form>
        </section >
    )
}