import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { MeuContextoProvider } from '../components/MeuContexto';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MeuContextoProvider>
      <Component {...pageProps} />
    </MeuContextoProvider>
  )
}
