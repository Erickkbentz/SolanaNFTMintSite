import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import MainNavbar from './components/MainNavbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MainNavbar/>
      <Component {...pageProps} />
     </div>

  )
}

export default MyApp
