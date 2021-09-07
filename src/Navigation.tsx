import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';

const Navigation: FC = () => {
    const { publicKey, wallet } = useWallet();
    function createstuff(){
        console.log(publicKey)
    }
    return (
        <nav>
            <h1>Solana Starter App</h1>
            <div>
                {createstuff()}
                <WalletMultiButton />
                {wallet && <WalletDisconnectButton />}
            </div>
        </nav>
    );
};

export default Navigation;
