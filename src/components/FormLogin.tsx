import { useState } from "react";
import styles from '../styles/Form.module.scss'
import { useRouter } from 'next/router'
import Link from "next/link";
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken'

export default function Input() {

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [checkCorrectLogin, setCheckCorrectLogin] = useState<any>('')



    const handleSubmit = async (event: any) => {

        event.preventDefault();

        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`;
        const data = {
            email: email,
            password: password
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();

                const responseUser = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/me`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(responseData),
                });

                const responseUserData = await responseUser.json()
                const name = responseUserData.name

                Cookies.set('token', responseData);
                Cookies.set('name', name);
                router.push('/');
            } else {
                const errorData = await response.json();
                const err = <p>{errorData.err}</p>
                setCheckCorrectLogin(err)
                console.error('Erro na resposta da API:', errorData);
            }

        } catch (error) {
            console.error('Erro na comunicação com a API:', error);
        }
    };

    return (
        <section className={styles.form}>
            <form onSubmit={handleSubmit}>
                <h1 className={styles.loginTittle}>LOGIN</h1>
                {checkCorrectLogin}
                <input
                    type="email"
                    value={email}
                    maxLength={60}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    value={password}
                    maxLength={30}
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