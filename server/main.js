// Import Sui client and wallet hooks
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
import { useWalletKit } from '@mysten/wallet-kit';

// Initialize Sui client
const client = new SuiClient({ url: getFullnodeUrl('devnet') });

// Get wallet signing function
const { signAndExecuteTransactionBlock } = useWalletKit();