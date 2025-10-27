import { http, createConfig } from 'wagmi'
import { fluentTestnet } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

// Define Fluent Testnet chain (if not in wagmi/chains, define it manually)
export const fluentTestnetChain = {
  id: 20994,
  name: 'Fluent Testnet',
  network: 'fluent-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.fluent.xyz'] },
    public: { http: ['https://rpc.testnet.fluent.xyz'] },
  },
  blockExplorers: {
    default: { name: 'FluentScan', url: 'https://testnet.fluentscan.xyz' },
  },
  testnet: true,
} as const

// Wagmi configuration
export const config = createConfig({
  chains: [fluentTestnetChain as any],
  connectors: [
    injected(),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || 'YOUR_PROJECT_ID' }),
  ],
  transports: {
    [fluentTestnetChain.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

