# SkillChain 🔗

> A decentralized freelance marketplace where your skills are verified on-chain and your reputation follows you everywhere.

Built on [Fluent Network](https://fluent.xyz) - the first blended execution blockchain that runs both Rust and Solidity smart contracts together.

## What is this?

SkillChain is like Upwork or Fiverr, but better:
- Your skills are verified on the blockchain (not just self-reported)
- Payments are automatic and trustless through smart contracts
- Your reputation is permanent and can't be faked
- No middleman taking huge cuts

## Cool Features ✨

- **Real Skill Verification**: Prove your skills on-chain with cryptographic proofs
- **Browse Jobs**: 20+ freelance opportunities across blockchain, design, and development
- **Smart Escrow**: Clients fund milestones, freelancers get paid automatically when approved
- **Your Wallet = Your Profile**: Connect once, your reputation follows you
- **Blended Contracts**: Uses both Rust (for heavy computation) and Solidity (for state management)

## Tech Stack 🛠️

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- RainbowKit + Wagmi (wallet connection)

**Smart Contracts:**
- **Rust/WASM**: SkillVerifier, EscrowCalculator (complex logic)
- **Solidity/EVM**: SkillRegistry, JobEscrow, PaymentManager (state management)

**Network:**
- Fluent Testnet (Chain ID: 20994)

## Quick Start 🚀

```bash
# Clone the repo
git clone https://github.com/GoJackzi/SkillChain.git
cd SkillChain

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and connect your wallet!

## How to Use 📖

1. **Connect Your Wallet** to Fluent Testnet
2. **Set Up Profile** - Add your name and bio
3. **Verify Skills** - Register and verify your skills on-chain
4. **Browse Jobs** - Check out the marketplace
5. **Apply to Jobs** - Submit proposals to clients
6. **Track Progress** - See your stats and reputation grow

## Network Setup 🌐

Add Fluent Testnet to MetaMask:

- **Network Name**: Fluent Testnet
- **RPC URL**: `https://rpc.testnet.fluent.xyz`
- **Chain ID**: 20994
- **Currency**: ETH
- **Explorer**: `https://testnet.fluentscan.xyz`

## Smart Contracts 📜

All contracts deployed on Fluent Testnet:

| Contract | Type | Address |
|----------|------|---------|
| SkillVerifier | WASM | `0x310500eAda15912a87B0Ff773287392F92eD6E28` |
| EscrowCalculator | WASM | `0x4eb45D68d9eBB1c5E8a5D8aA546c4B034B4b32A0` |
| SkillRegistry | Solidity | `0x0b6a6a6b2837f8CC1888744CCEB5ead11185b192` |
| JobEscrow | Solidity | `0xc58a3DdB4D04C97026E0A5a40619dD00674e28a1` |
| PaymentManager | Solidity | `0x47dabEfF5858813AfC3C8403b202F85b8a7f58a9` |

## Why Fluent? 🌊

Fluent is the only blockchain where you can run **Rust** and **Solidity** contracts side-by-side. This means:
- Use Rust for complex calculations (cheaper gas!)
- Use Solidity for familiar EVM contracts
- They talk to each other seamlessly

Learn more: [docs.fluent.xyz](https://docs.fluent.xyz)

## Screenshots 📸

(Coming soon - the app is live, go check it out!)

## Contributing 🤝

Found a bug? Have an idea? PRs are welcome!

## License

MIT

---

Made with ❤️ by Musky for Fluent
