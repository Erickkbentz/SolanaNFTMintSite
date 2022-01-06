import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { createContext, useContext, useEffect, useState } from "react";
import { useWallet, useConnection} from '@solana/wallet-adapter-react'

const BalanceContext = createContext(null);

export default function useWalletBalance() {
  const [balance, setBalance]: any = useContext(BalanceContext);
  return [balance, setBalance];
}

export const WalletBalanceProvider: React.FC<{}> = ({ children }) => {
  const wallet = useWallet();
  const [balance, setBalance] = useState(0);

  const connection = useConnection().connection

  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);

  return (
    <BalanceContext.Provider value={[balance, setBalance] as any}>
      {children}
    </BalanceContext.Provider>
  );
};
