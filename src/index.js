import bar from './bar.js';
import { getFullnodeUrl } from '@mysten/sui/client';
import { WalletStandardAdapterProvider } from "@mysten/wallet-adapter-wallet-standard";
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';


// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

bar();

async function connectWallet() {


    const walletProvider = new WalletStandardAdapterProvider();
    oo("walletProvider", walletProvider)
    const wallets = walletProvider.get();

    if (wallets.length === 0) {
        alert("No Sui-compatible wallets found!");
        return;
    }

    const suiWallet = wallets[0]; // Select the first available wallet

    try {
        const accounts = await suiWallet.connect();
        console.log("Connected Wallet Address:", accounts);
        alert("Connected to: " + accounts); 
    } catch (error) {
        console.error("Wallet connection failed:", error);
    }
}

connectWallet()

function oo(n,o) {
    console.log(n + ": " + JSON.stringify(null,2))
}