import React, { FC} from "react";
import { Button } from "react-bootstrap";
import { useWallet } from '@solana/wallet-adapter-react'
import swal from 'sweetalert'
import useWalletBalance from "../hooks/useWalletBalance";

export const MintView: FC = () => {
  const [balance] = useWalletBalance();

  const wallet = useWallet()

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