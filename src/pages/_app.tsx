import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import MainNavbar from '../components/MainNavbar'
import React from 'react';

import { WalletBalanceProvider } from '../hooks/useWalletBalance';
import WalletConnectionProvider from '../components/WalletConnection/WalletConnectionProvider';


function MyApp({ Component, pageProps }: AppProps) {  
  return (
    <WalletConnectionProvider>
      <WalletBalanceProvider>
        <MainNavbar/>
        <Component {...pageProps} />
      </WalletBalanceProvider>
    </WalletConnectionProvider>

  )
}

export default MyApp
