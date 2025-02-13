import bar from './bar.js';
import { getFullnodeUrl } from '@mysten/sui/client';
import { getWallets } from '@mysten/wallet-standard';
oo("getWallets", getWallets)

const availableWallets = getWallets().get();


bar();

async function connectWallet() {


    const walletProvider = getWallets()
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
    alert(n + ": " + JSON.stringify(null,2))
}