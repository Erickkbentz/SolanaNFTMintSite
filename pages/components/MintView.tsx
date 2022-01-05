import React, { FC, useEffect, useState, useMemo} from "react";
import { Button } from "react-bootstrap";
import { useWallet, useConnection} from '@solana/wallet-adapter-react'
import { clusterApiUrl, Connection} from '@solana/web3.js';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export const MintView: FC = () => {
  const [balance, setBalance] = useState<number>();

  const connection = useConnection().connection
  console.log(connection)
  const wallet = useWallet()
  
  useEffect(() => {
    (async () => { 
      console.log("publicKey: " +   wallet.publicKey?.toBase58())
      if (wallet && wallet.publicKey) {
        const amount = await connection.getBalance(wallet.publicKey)
        setBalance(amount / LAMPORTS_PER_SOL)
        console.log("balance: " + amount / LAMPORTS_PER_SOL)
      }
      
    })()
  })

 

  return (
    <main className="mint">
      <h1 className="mint-title">
        Mint Live!
      </h1>

      {wallet.connected ? 
      (<p>Balance: ◎ {(balance || 0).toLocaleString()} SOL</p>) :
      (<p>Please Connect Wallet </p>)
      }
      
      <p>0 of 100 Available</p>
      <Button>Mint!</Button>      
    </main>
  )
  
}

export default MintView