import React, { FC, useEffect, useState, useMemo} from "react";
import { Button } from "react-bootstrap";
import { useWallet, useConnection} from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import swal from 'sweetalert'

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

  const mintNFT = async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    if (!wallet.connected) {
      swal({
        text: "Please Connect Wallet",
        icon: "warning",
        
      });
    }

  }
 

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
      <form onSubmit={mintNFT}>
        <input id="mintAmount" name="mintAmount" type="number" min="1" style={{width:"5em", margin:"5px"}} required/>
        <Button type="submit" style={{margin:"5px", background:"#553561"}}>Mint!</Button>   
      </form>
    </main>
  )
  
}

export default MintView