import { useState } from "react";
import styles from '../styles/Form.module.scss'
import { useRouter } from 'next/router'
import Link from "next/link";

export default function Input() {

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [checkEmailExist, setCheckEmailExist] = useState<any>('')

    const handleSubmit = async (event: any) => {

        event.preventDefault();

        const url = '/api/login';
        const data = {
            email: email,
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
                console.log('Login realizado com sucesso!', responseData);
                router.push('/');
            } else {
                const errorData = await response.json();
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